function search() {
    var mainData = document.getElementById("mainData").value.trim().split('\n').map(x => x.trim());
    var searchData = document.getElementById("searchData").value.trim().split('\n').map(x => x.trim());
    var additionalDataInput = document.getElementById("additionalData").value.trim();
    var additionalData = additionalDataInput ? additionalDataInput.split('\n').map(x => x.trim()) : null;

    var intersection = searchData.filter(item => mainData.includes(item));

    if (additionalData) {
      intersection = intersection.filter(item => additionalData.includes(item));
    }

    document.getElementById("searchResult").value = intersection.join('\n');
    var mainSize = mainData.length;
    var searchSize = searchData.length;
    var addSize = additionalData ? additionalData.length : 0;

    var dataSummary = document.getElementById("dataSummary");
    dataSummary.innerHTML = `第一列数据数量: ${mainSize}<br>
                             第二列数据数量: ${searchSize}<br>` +
                             (additionalData ? `第三列数据数量: ${addSize}<br>` : "") +
                             `交集数量: ${intersection.length}`;

    drawVennDiagram(mainSize, searchSize, addSize, intersection.length);
  }

  function drawVennDiagram(mainCount, searchCount, additionalCount, interSize) {
    var sets = [
      {sets: ['第一列数据'], size: mainCount},
      {sets: ['第二列数据'], size: searchCount},
      {sets: ['第一列数据', '第二列数据'], size: interSize}
    ];

    if (additionalCount) {
      sets.push(
        {sets: ['第三列数据'], size: additionalCount},
        {sets: ['第一列数据', '第三列数据'], size: interSize},
        {sets: ['第二列数据', '第三列数据'], size: 0},
        {sets: ['第一列数据', '第二列数据', '第三列数据'], size: interSize}
      );
    }

    var diagram = venn.VennDiagram();
    var div = d3.select("#vennDiagram").datum(sets);
    div.call(diagram);
  }

  function clearData() {
    document.getElementById("mainData").value = "";
    document.getElementById("searchData").value = "";
    document.getElementById("additionalData").value = "";
    document.getElementById("searchResult").value = "";
    document.getElementById("dataSummary").innerHTML = "";
    d3.select("#vennDiagram").selectAll("*").remove();
  }

  function copyToClipboard() {
    var copyText = document.getElementById("searchResult");
    copyText.select();
    document.execCommand("copy");
    alert("Copied to clipboard!");
  }