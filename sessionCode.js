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
        var button = document.createElement("button");
        var modal = document.createElement("div");

        button.className = "bg-red-500 hover:bg-red-700 text-white text-sm font-medium py-2 px-4 rounded fixed bottom-1/2 -right-10 -rotate-90 z-50";
        button.innerHTML = "Need help?";
        document.body.appendChild(button);

        modal.className = "modal bg-red-50 fixed top-0 left-0 w-full h-full p-6 z-10";
        modal.style.display = "none";
        document.body.appendChild(modal);

        var modalBody = document.createElement("div");
        modalBody.className = "modal-body";
        modal.appendChild(modalBody);

        var clientId = document.createElement("p");
        clientId.innerHTML = ${JSON.stringify(id)}
        clientId.className = "text-white w-fit rounded px-2 text-base font-medium border-b bg-red-500";
        modalBody.appendChild(clientId);

        var clientHost = document.createElement("p");
        clientHost.innerHTML = "Session Description";
        clientHost.className = "text-red-500 text-4xl font-semibold mt-4";
        modalBody.appendChild(clientHost);

        var clientDescription = document.createElement("p");
        clientDescription.innerHTML = "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias vitae possimus nesciunt fugit corporis dolor, exercitationem quaerat optio, laudantium neque eaque. Quo ex nemo hic minus facilis, fugiat illum deleniti."
        clientDescription.className = "text-red-500 text-base mt-4 leading-7 w-1/2";
        modalBody.appendChild(clientDescription);

        var hr = document.createElement("hr");
        hr.className = "border-red-200 mt-4";
        modalBody.appendChild(hr);


        var image = document.createElement("img");
        image.src = "http://easyfidb.herokuapp.com/download/c4eed106-c6b5-4a3b-b513-a7c34d274518.png";
        image.className = "w-16 mx-auto mt-16";
        modalBody.appendChild(image);

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
