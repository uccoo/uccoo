function union() {
    var mainData = document.getElementById("mainData").value.trim().split('\n');
    var searchData = document.getElementById("searchData").value.trim().split('\n');
    var additionalData = document.getElementById("additionalData").value.trim().split('\n');

    var unionSet = new Set([...mainData, ...searchData, ...additionalData]);

    var dataSummary = document.getElementById("dataSummary");
    dataSummary.innerHTML = `第一列数据数量: ${mainData.length}<br>
                             第二列数据数量: ${searchData.length}<br>
                             第三列数据数量: ${additionalData.length}<br>
                             并集数量: ${unionSet.size}<br>
                             并集占比: ${(unionSet.size / (mainData.length + searchData.length + additionalData.length) * 100).toFixed(2)}%`;

    document.getElementById("unionResult").value = Array.from(unionSet).join('\n');

    drawVennDiagram(mainData.length, searchData.length, additionalData.length, unionSet.size);
  }

  function clearData() {
    document.getElementById("mainData").value = "";
    document.getElementById("searchData").value = "";
    document.getElementById("additionalData").value = "";
    document.getElementById("unionResult").value = "";
    document.getElementById("dataSummary").innerHTML = "";
    d3.select("#vennDiagram").selectAll("*").remove();
    d3.select("#vennDiagram").append("div").attr("id", "vennTitle").text("Venn Diagram");
  }

  function drawVennDiagram(mainDataCount, searchDataCount, additionalDataCount, unionCount) {
    var diagram = venn.VennDiagram();

    var vennData = [
      {sets: ['第一列数据'], size: mainDataCount},
      {sets: ['第二列数据'], size: searchDataCount},
      {sets: ['第三列数据'], size: additionalDataCount},
      {sets: ['第一列数据', '第二列数据'], size: unionCount - additionalDataCount},
      {sets: ['第一列数据', '第三列数据'], size: unionCount - searchDataCount},
      {sets: ['第二列数据', '第三列数据'], size: unionCount - mainDataCount},
      {sets: ['第一列数据', '第二列数据', '第三列数据'], size: additionalDataCount}
    ];

    var div = d3.select("#vennDiagram");
    div.selectAll("*").remove();
    div.append("div").attr("id", "vennTitle").text("Venn Diagram");
    div.datum(vennData).call(diagram);
  }

  function copyToClipboard() {
    var copyText = document.getElementById("unionResult");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    document.execCommand("copy");

    alert("结果已复制到剪贴板");
  }