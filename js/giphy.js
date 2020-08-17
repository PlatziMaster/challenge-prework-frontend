


    $(document).ready(function() {
        
        var refresh;
       
        const duration = 1000 * 10;
       
        const giphy = {
            baseURL: "https://api.giphy.com/v1/gifs/",
            apiKey: "RmJhnLNYVPOaRvrQmEC7JLkovqnDk7yj",
            tag: "cartoon",
            type: "random",
            rating: "pg"
        };
       
        const $gif_wrap = $(".modal_content-avatar");
        // Giphy API URL
        let giphyURL = encodeURI(
            giphy.baseURL +
                giphy.type +
                "?api_key=" +
                giphy.apiKey +
                "&tag=" +
                giphy.tag +
                "&rating=" +
                giphy.rating
        );
    

        var newGif = () => $.getJSON(giphyURL, json => renderGif(json.data));

        var renderGif = _giphy => {
            console.log(_giphy);
            document.querySelector('.modal-avatar-img').src=_giphy.image_original_url

        };
        // Call Giphy API for new gif
        newGif();
    });
    