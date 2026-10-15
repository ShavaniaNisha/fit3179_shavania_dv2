
console.log("main.js is running!");

async function loadChart(elementId, specificationPath) {
    const container = document.getElementById(elementId);

    if (!container) {
        console.error("Chart container not found:", elementId);
        return;
    }

    container.innerHTML = "<p>Loading chart...</p>";

    try {
        console.log("Loading:", specificationPath);

        const result = await vegaEmbed(
            `#${elementId}`,
            specificationPath,
            {
                actions: false,
                renderer: "svg"
            }
        );

        console.log("Chart loaded successfully!", result);

    } catch (error) {
        console.error("Chart loading failed:", error);

        container.innerHTML = `
            <p style="color: red;">
                Chart failed to load. Check the browser console.
            </p>
        `;
    }
}

loadChart("rabbit_map", "js/rabbit_map.vg.json");
loadChart("rabbit_trend", "js/rabbit_trend.vg.json");
loadChart("aus_state_bar", "js/aus_state_bar.vg.json");
loadChart("aus_history_heatmap", "js/aus_history_heatmap.vg.json");
loadChart("aus_rainfall_scatter", "js/aus_rainfall_scatter.vg.json");
loadChart("aus_boxplot", "js/aus_boxplot.vg.json");
loadChart("aus_choropleth", "js/aus_choropleth.vg.json");
loadChart("aus_occurrence_density", "js/aus_occurrence_density.vg.json");
loadChart("aus_history_area", "js/aus_history_area.vg.json");
loadChart("aus_datasrc_dot", "js/aus_datasrc_dot.vg.json");



