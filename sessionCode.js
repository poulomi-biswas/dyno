function sessionCode(id, host) {
  let code = `
    let script = document.createElement("script");
    let modalOpen = false;

    script.onload = function() {
        main();
    }
    script.src = "https://cdn.tailwindcss.com";
    document.head.appendChild(script);

    function main() {
        var div = document.createElement("div");
        var button = document.createElement("button");
        var modal = document.createElement("div");

        div.className = "fixed bottom-1/2 -right-10 -rotate-90 z-50 ";

        button.className = "bg-red-500 relative hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded ";
        button.innerHTML = "Need help?";
        div.appendChild(button);

        modal.className = "modal absolute bg-white shadow-xl shadow-gray-200 border bottom-8 -left-[150px] w-[400px] h-[450px] p-6 z-10 rotate-90 rounded-lg";
        modal.style.display = "flex";
        button.appendChild(modal);

        document.body.appendChild(div);

        button.onclick = function() {
            if(modalOpen) {
                modal.style.display = "none";
                console.log("Modal closed");
                modalOpen = false;
            }else{
                modal.style.display = "flex";
                console.log("Modal opened");
                modalOpen = true;
            }
        }
    }

    `;
  return code;
}

module.exports = sessionCode;
