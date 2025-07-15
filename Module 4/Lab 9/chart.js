// Initialise the echarts instance based on the prepared div
let myChart = echarts.init(document.getElementById("main"));

fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((json) => {
    // Count products per category
    const categoryCounts = {};
    json.forEach((product) => {
      categoryCounts[product.category] =
        (categoryCounts[product.category] || 0) + 1;
    });
    const categories = Object.keys(categoryCounts);
    const counts = Object.values(categoryCounts);
    // Set chart options
    let options = {
      title: { text: "Fake Store Categories" },
      xAxis: { data: categories },
      yAxis: {},
      series: [
        {
          name: "# products",
          type: "bar",
          data: counts,
        },
      ],
    };
    myChart.setOption(options);
  });
