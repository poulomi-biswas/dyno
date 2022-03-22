function supportUkraine() {
  //  <link rel="preconnect" href="https://fonts.googleapis.com">
  //<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  //<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap" rel="stylesheet"></link>

  const code = `
  
        let modalOpen = false;
  
        main()

        function main() {

            var preconnect = document.createElement("link")
            preconnect.rel = "preconnect"
            preconnect.href = "https://fonts.googleapis.com"
            document.head.appendChild(preconnect)

            var preconnect2 = document.createElement("link")
            preconnect.rel = "preconnect"
            preconnect.href = "https://fonts.gstatic.com"
            preconnect.crossorigin = "anonymous"
            document.head.appendChild(preconnect2)

            var link = document.createElement("link")
            link.rel = "stylesheet"
            link.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap"
            document.head.appendChild(link)
            
            
            var div = document.createElement('div');
            div.style.backgroundColor = "red";
            div.style.display = "flex";
            div.style.position = "fixed";
            div.style.bottom = "50%";
            div.style.right = "0";
            div.style.borderRadius = "2px";
            div.style.overflow = "hidden";

            var flag = document.createElement('div');
            flag.style.height = "70px";
            flag.style.width = "40px";
            flag.style.backgroundColor = "beige";
            flag.style.display = "flex";

            var top = document.createElement('div');
            top.style.height = "100%";
            top.style.width = "50%";
            top.style.backgroundColor = "rgba(1,90,186,255)";

            var bottom = document.createElement('div');
            bottom.style.height = "100%";
            bottom.style.width = "50%";
            bottom.style.backgroundColor = "rgba(254,213,1,255)";

            flag.appendChild(top);
            flag.appendChild(bottom);
            div.appendChild(flag);


            var modal = document.createElement('div');

            modal.style.width = "250px";
            modal.style.backgroundColor = "white";
            modal.style.borderRadius = "4px";
            modal.style.border = "1px solid rgba(0,0,0,0.2)";
            modal.style.boxShadow = "0px 0px 15px 3px rgba(0,0,0,0.05)";
            modal.style.position = "fixed";
            modal.style.padding = "20px";
            modal.style.top = "200px";
            modal.style.right = "60px";
            modal.style.display = "none";


            var headings = document.createElement('h2');
            headings.style.color = "rgba(0,0,0,0.8)";
            headings.style.fontSize = "25px";
            headings.style.fontWeight = "bold";
            headings.style.margin = "0";
            headings.style.textAlign = "center";
            headings.innerText = "Ukraine Crisis Appeal";
            headings.style.fontFamily = "Roboto";

            var para = document.createElement('p');
            para.style.color = "rgba(0,0,0,0.8)";
            para.style.fontSize = "14px";
            para.style.fontFamily = "Roboto";
            para.style.lineHeight = "1.6";
            para.innerText = "As you know, the humanitarian situation is increasingly dire and desperate. Millions of people have no safe place to call home. More than 2.5 million have already left Ukraine, while countless more are still trapped underground, taking cover from the shelling, and desperate for a safe escape. Hundreds of thousands of people still have no food, no water, no medical care, and no heat or electricity."

            modal.appendChild(headings);
            modal.appendChild(para);


            var button = document.createElement('button');
            button.style.backgroundColor = "rgba(0,0,0,0.8)";
            button.style.color = "white";
            button.style.fontSize = "14px";
            button.style.fontFamily = "Roboto";
            button.style.border = "none";
            button.style.borderRadius = "4px";
            button.style.padding = "10px";
            button.style.cursor = "pointer";
            button.style.margin = "10px";
            button.innerText = "Click here to donate";

            modal.appendChild(button);

            var modalParent = document.createElement('div');
            modalParent.style.position = "relative";

            modalParent.appendChild(modal);

            div.appendChild(modalParent);
            document.body.appendChild(div);

            button.addEventListener('click', function() {
                window.open("https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal", "_blank");
            })

            flag.addEventListener('click', function() {

                if (modalOpen == false) {

                    modal.style.display = "block";
                    modalOpen = true;
                }else{

                    modal.style.display = "none";
                    modalOpen = false;
                }
            })
        }
    `;

  return code;
}

module.exports = supportUkraine;
