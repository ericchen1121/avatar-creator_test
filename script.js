document.getElementById('exportBtn').addEventListener('click', function() {
    const skinColor = document.getElementById('skinColor').value;
    const hairStyle = document.getElementById('hairStyle').value;
    const eyeType = document.getElementById('eyeType').value;
    const mouthType = document.getElementById('mouthType').value;
    const eyelashType = document.getElementById('eyelashType').value; 
    
    // 在這裡添加生成和匯出圖像的邏輯
    console.log(`Selected Options: ${skinColor}, ${hairStyle}, ${eyeType}, ${mouthType}, ${eyelashType}`);
    alert("Export feature to be implemented.");
});
