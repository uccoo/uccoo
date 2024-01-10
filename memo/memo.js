function showContent(noteId) {
    var contentDiv = document.getElementById("content-center");
    contentDiv.innerHTML = ""; // Clear existing content

    switch (noteId) {
        case 'memo-space':
            contentDiv.innerHTML = `
                <h2>空间转录组</h2>
                <p>
                    空间转录组学是研究基因在组织或细胞中的空间表达的一门技术，它允许科学家观察和理解基因在组织结构中的特定位置上是如何表达的。
                    这一领域的发展使得我们能够深入研究组织中个体细胞的基因表达，从而更好地理解生物学过程、发育和疾病发生的机制。
                </p>
                <p>
                    通过空间转录组学的技术，我们可以获得关于基因在组织中空间分布的信息，这对于研究细胞类型、细胞相互作用以及组织结构中基因表达的动态变化至关重要。
                    这项技术的应用涵盖了许多领域，包括发育生物学、神经科学、肿瘤研究等。
                </p>`;
            break;

        case 'memo-single-cell':
            contentDiv.innerHTML = `
                <h2>单细胞转录组</h2>
                <p>
                    单细胞转录组学是一种研究单个细胞基因表达的技术，通过这项技术，我们可以深入了解每个细胞在基因水平上的活动，揭示细胞群体的差异和多样性。
                    这一领域的发展使得科学家能够更全面地了解细胞的异质性，揭示不同细胞之间的功能差异，以及在发育、疾病和其他生物学过程中的重要性。
                </p>
                <p>
                    单细胞转录组学的应用广泛，包括发现新的细胞类型、研究细胞发育和分化过程、识别疾病中的细胞异质性等。这项技术的发展推动了生物医学研究的深入，为个体化医学提供了强有力的工具。
                </p>`;
            break;

        default:
            contentDiv.innerHTML = "<h2>选择一个记事本</h2><p>点击左侧标题以查看记事本内容。</p>";
    }
}
