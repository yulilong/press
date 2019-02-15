function integrateGitalk (router) {
    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);
    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);

    router.afterEach((to) => {
        console.log('router.afterEac', to);
        console.log('scriptGitalk.onload', scriptGitalk.onload);
        if (scriptGitalk.onload) {
            loadGitalk(to);
        } else {
            scriptGitalk.onload = () => {
                loadGitalk(to);
            }
        }
    });

    function loadGitalk () {
        let commentsContainer = document.getElementById('gitalk-container');
        const $page = document.querySelector('.page');
        if (commentsContainer && $page) {
            $page.removeChild(commentsContainer)
        }
        commentsContainer = document.createElement('div');
        commentsContainer.id = 'gitalk-container';
        commentsContainer.classList.add('content');
        if ($page) {
            $page.appendChild(commentsContainer);
            if (typeof Gitalk !== 'undefined' && Gitalk instanceof Function) {
                renderGitalk();
                console.log(22222);
            }
        }
    }
    function renderGitalk () {
        const gitalk = new Gitalk({
            clientID: '2eb19afceda708b27e64',
            clientSecret: '36aedb5a30321626a8631689fee5fafd5929f612',
            repo: 'gitalk-comment',
            owner: 'yulilong',
            admin: ['yulilong'],
            title: location.pathname,
            id: location.pathname,      // Ensure uniqueness and length less than 50
            language: 'zh-CN',
        });
        gitalk.render('gitalk-container');
        console.log(11111);
    }
    window.loadGitalk = loadGitalk;
}

export default ({ Vue, options, router }) => {
    try {
        document && integrateGitalk(router)
        var _wr = function (type) {
            var orig = history[type];
            return function () {
                var rv = orig.apply(this, arguments);
                var e = new Event(type);
                e.arguments = arguments;
                window.dispatchEvent(e);
                return rv;
            };
        };
        history.pushState = _wr('pushState');
        window.addEventListener('pushState', function(e) {
            // console.log('THEY DID IT AGAIN! pushState 2222222');
            // window.loadGitalk();
            console.log(33333);
        });
         
    } catch (e) {
        console.error(e.message)
    }
}