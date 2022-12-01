var thebutton = document.querySelector(".addpost");
var postnum = 1;

// create new post
thebutton.addEventListener("click", function() {

    const query = "https://images-api.nasa.gov/search?q=news&media_type=image";
    fetch(query) .then(res => res.json())
    .then(data => {
        console.log(data);
        //get random image
        const random = Math.floor(Math.random() * data.collection.items.length);
        const item = data.collection.items[random];
        const img = item.links[0].href;
                        
        // get image title
        const title = item.data[0].title;

        // get image description
        var description = item.data[0].description.split("");

        if (description.length > 400) {
            description = description.slice(0, 400);
            description.push("...");
        }

        description = description.join("");

        // get image date
        const date = item.data[0].date_created.split("T")[0].split("-").reverse().join("/");

        // get image location, photographer, and hq
        const location = item.data[0].location;
        const photographer = item.data[0].photographer;
        const hq = item.data[0].center;

        // get nasa id
        const nasa_id = item.data[0].nasa_id;

        // set image

        var postHTML = `
            <li id="post_${postnum}" style="z-index: ${(999-postnum)}; margin-top: 10vw;">
                <section id="uid_post">
                    <section id="cont_post">
                        <section id="vid_post" style="background-image: url('${img}'); background-position: 50% 50%;  background-attachment: fixed; background-repeat: no-repeat; background-size: 100vh auto; -webkit-background-clip: block; -moz-background-clip: block; background-clip: block; height: 25vw; width: 32vw;" title="${hq}:${location} (photo by ${photographer})">
                        <section id="uid_hoverCover"></section>
                        <section id="uid_post_head">
                            <section id="uid_postAuth">
                                <section id="uid_postAuth_name">
                                    <h3>──────────────<br> <span id="postTitle" style="font-weight: 1000; font-size: 1vw;">${title}</span>​ ​ ​ ​${description}</span><span id="postDate">${date}</span><br>       ───────────</h3>
                                </section>
                            </section>
                        </section>
                        </section>
                    </section>
                </section>
            </li>`

        document.querySelector("ul").insertAdjacentHTML("beforeend", postHTML);

        // scroll to bottom
        console.log(`scrolling to post_${(postnum+1)} from post_${postnum}`);

        setTimeout(function() {
            document.getElementById('cont_feed').scroll({ top: document.getElementById('cont_feed').scrollHeight, behavior: 'smooth' });
        }, 1000);
    });

    postnum++;
});