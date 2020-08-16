function generateDecorativeCircles(number: string) {
    const bodyContainer: HTMLElement = document.body;
    const decorationNode: HTMLDivElement = document.createElement("div");
    decorationNode.className = `decorative-circle--${number}`;
    bodyContainer.appendChild(decorationNode);
}

export default generateDecorativeCircles;
