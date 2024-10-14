// Store the original text content of each text node for every element
const originalElements = new Map<Element, string[]>();

// State variable to keep track of punctuation toggle
let punctuationState = true;

const togglePunctuation = () => {
  // Find the header elements
  const sanskritHeaders = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6")).filter(
    (header) => {
      const text = header.textContent?.trim() || "";
      return ["Text", "Notes", "Commentary"].some(keyword => text.includes(keyword));
    }
  );

  if (sanskritHeaders.length === 0) {
    console.error("No sanskrit header found in the DOM.");
    return;
  }

  // Function to recursively process text nodes
  const processTextNodes = (element: Element, action: (textNode: Text) => void) => {
    element.childNodes.forEach((node) => {
      if (node.nodeType === Node.TEXT_NODE) {
        action(node as Text);
      } else if (node.nodeType === Node.ELEMENT_NODE) {
        // Recursively process child elements
        processTextNodes(node as Element, action);
      }
    });
  };

  sanskritHeaders.forEach((sanskritHeader) => {
    // console.log("Sanskrit header found:", sanskritHeader);

    // Find the sibling <p> until the next header
    let nextElement = sanskritHeader.nextElementSibling;

    while (nextElement && !/^h[1-6]$/i.test(nextElement.tagName)) {
      if (nextElement.tagName.toLowerCase() === "p") {
        // console.log("Found paragraph:", nextElement.innerHTML);

        let originalTextNodes = originalElements.get(nextElement) || [];

        if (punctuationState) {
          // Store the original text content of each text node
          const currentTextNodes: string[] = [];

          // Process all text nodes inside the paragraph, including bold, italic, etc.
          processTextNodes(nextElement, (textNode) => {
            const originalText = textNode.textContent || '';

            // Save original text to be restored later
            currentTextNodes.push(originalText);

            // Remove punctuation from text
            const updatedText = originalText.replace(/[-—{}‹›;,:'"‘“”()₁₂₃₄₅₆₇₈₋]|’\s?(?![aeiou])/g, "");
            textNode.textContent = updatedText;
          });

          // Store the original text content in the map
          originalElements.set(nextElement, currentTextNodes);

        } else {
          // Restore the original text content of each text node
          let nodeIndex = 0;

          processTextNodes(nextElement, (textNode) => {
            // Restore the original text content if available
            const originalText = originalTextNodes[nodeIndex] || '';
            textNode.textContent = originalText;

            nodeIndex++;
          });
        }

        // console.log("Updated paragraph content:", nextElement.innerHTML);
      }

      // Move to the next sibling element
      nextElement = nextElement.nextElementSibling;
    }
  });

  // Toggle the punctuation state
  punctuationState = !punctuationState;
};


document.addEventListener("DOMContentLoaded", () => {
  const handlePunctuationToggle = (e) => {
    togglePunctuation();
  };

  // Attach event listener to the Punctuation button
  const punctuationButton = document.querySelector("#punctuation");
  if (punctuationButton) {
    punctuationButton.addEventListener("click", handlePunctuationToggle);
    window.addEventListener("beforeunload", () => {
      punctuationButton.removeEventListener("click", handlePunctuationToggle);
    });
  } else {
    console.error("Punctuation button not found in the DOM.");
  }
});
