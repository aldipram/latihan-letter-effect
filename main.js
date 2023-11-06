let cursor = document.querySelector('#cursor');
        let body = document.querySelector('body');
        document.onmousemove = function(e){
            cursor.style.top = e.pageY + 'px';
            cursor.style.left = e.pageX + 'px';

            body.style.backgroundPositionX = e.pageX/-4 + 'px';
            body.style.backgroundPositionY = e.pageY/-4 + 'px';

            let element = document.createElement('div');
            element.className = 'element';
            body.prepend(element);

            element.style.left = cursor.getBoundingClientRect().x + 'px';
            element.style.top = cursor.getBoundingClientRect().y - 20 + 'px';

            setTimeout(function () {
                let text = document.querySelectorAll('.element')[0],
                directionX = Math.random() < .5 ? -1 : 1,
                directionY = Math.random() < .5 ? -1 : 1

                text.style.left = parseInt(text.style.left) - (directionX * (Math.random() *250)) + 'px';
                text.style.top = parseInt(text.style.top) - (directionY * (Math.random() *250)) + 'px';
                text.style.opacity = 0;
                text.style.transform = 'scale(0.25)';
                text.innerHTML =  randomText();

                setTimeout(function () {
                    element.remove();
                },1000);
            },10);
        };


        function randomText() {
            var text = ('abcdefghijklmnopqrstuvwxyz1234567890').split('');
            letter = text[Math.floor(Math.random() * text.length)];
            return letter;

        }