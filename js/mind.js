/* 注意两个js的引入顺序 */
document.write(`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/kity@2.0.4/dist/kity.min.js"></script>`)
document.write(`<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/kityminder-core@1.4.50/dist/kityminder.core.min.js"></script>`)

document.write(`<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/kityminder-core@1.4.50/src/kityminder.css"/>`)

setTimeout(()=>{
    var mindmap=document.querySelector(".mindmap")
    if (mindmap){
    var minder = new kityminder.Minder({
        renderTo: '.mindmap'
    });
    var markdownText = mindmap.innerText.trim();
    mindmap.querySelectorAll("p").forEach(function(element,index) {
        element.style.display = 'none';
    });
    minder.importData('markdown', markdownText);
    minder.disable();
    minder.execCommand('hand');
    }
},1000
)

