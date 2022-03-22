function supportUkraine() {
  const code = `
    
        var script = document.createElement('script');
        script.onload = function() {

            main();
        }

        script.src = "https://cdn.tailwindcss.com"
        document.head.appendChild(script);


        function main() {

            document.body.style.padding = "20px";
            
            var div = document.createElement('div');
            var flag = document.createElement('div');

            div.className = "fixed bottom-2 -right-14 -rotate-45";

            flag.className = "flex flex-col items-center h-16 w-48 bg-red-50";

            var top = document.createElement('div');
            var bottom = document.createElement('div');

            top.className = "flex flex-col items-center justify-center h-1/2 w-full bg-blue-500";
            bottom.className = "flex flex-col items-center justify-center h-1/2 w-full bg-yellow-300";

            flag.appendChild(top);
            flag.appendChild(bottom);

            div.appendChild(flag);
            document.body.appendChild(div);

            div.addEventListener('click', function() {
                window.open("https://donate.redcross.org.uk/appeal/ukraine-crisis-appeal", "_blank");
            })
        }
    `;

  return code;
}

module.exports = supportUkraine;
