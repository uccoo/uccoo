  function search() {
    var mainData = document.getElementById("mainData").value.trim().split('\n');
    var searchData = document.getElementById("searchData").value.trim().split('\n');
    var additionalData = document.getElementById("additionalData").value.trim().split('\n');

    var results = [];

    searchData.forEach(function(item) {
      var result = mainData.filter(value => value.trim() === item.trim());
      results.push(...result);
    });

    additionalData.forEach(function(item) {
      var result = mainData.filter(value => value.trim() === item.trim());
      results.push(...result);
    });

    var dataSummary = document.getElementById("dataSummary");
    dataSummary.innerHTML = `第一列数据数量: ${mainData.length}<br>
                             第二列数据数量: ${searchData.length}<br>
                             第三列数据数量: ${additionalData.length}<br>
                             交集数量: ${results.length}<br>
                             交集占比: ${((results.length / mainData.length) * 100).toFixed(2)}%`;
    
    document.getElementById("searchResult").value = results.join('\n');

    drawVennDiagram(mainData.length, searchData.length, additionalData.length, results.length);
  }

  function clearData() {
    document.getElementById("mainData").value = "";
    document.getElementById("searchData").value = "";
    document.getElementById("additionalData").value = "";
    document.getElementById("searchResult").value = "";
    document.getElementById("dataSummary").innerHTML = "";
    d3.select("#vennDiagram").selectAll("*").remove();
  }

  function drawVennDiagram(mainDataCount, searchDataCount, additionalDataCount, intersectionCount) {
    var diagram = venn.VennDiagram();

    var vennData = [
      {sets: ['第一列数据'], size: mainDataCount},
      {sets: ['第二列数据'], size: searchDataCount},
      {sets: ['第三列数据'], size: additionalDataCount},
      {sets: ['第一列数据', '第二列数据'], size: intersectionCount - additionalDataCount},
      {sets: ['第一列数据', '第三列数据'], size: additionalDataCount},
      {sets: ['第二列数据', '第三列数据'], size: 0}, // No intersection between second and third columns
      {sets: ['第一列数据', '第二列数据', '第三列数据'], size: additionalDataCount}
    ];

    var div = d3.select("#vennDiagram");
    div.datum(vennData).call(diagram);
  }

  function copyToClipboard() {
    var copyText = document.getElementById("searchResult");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  }