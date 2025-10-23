(function () {
    function toggle(idBtn, idNav) {
        const btn = document.getElementById(idBtn);
        const nav = document.getElementById(idNav);
        if (!btn || !nav) return;
        btn.addEventListener('click', () => {
            const isOpen = nav.style.display === 'flex' || nav.style.display === 'block';
            nav.style.display = isOpen ? 'none' : (window.innerWidth < 880 ? 'block' : 'flex');
        });
        window.addEventListener('resize', () => {
            if (window.innerWidth >= 880) nav.style.display = 'flex';
            else nav.style.display = 'none';
        });
    }
    toggle('navToggle', 'mainNav');
    toggle('navToggle2', 'mainNav2');
    toggle('navToggle3', 'mainNav3');



    function checaIdade(string) {

        const formataStrig = string.replace(/[-]/g, '')
        const dataAtual = new Date();

        const anoAtual = Number(dataAtual.getFullYear());
        const mesAtual = Number(dataAtual.getMonth() + 1);
        const diaAtual = Number(dataAtual.getDate());

        const getAno = Number(formataStrig.slice(0, 4));
        const getMes = Number(formataStrig.slice(4, 6));
        const getDia = Number(formataStrig.slice(6, 8));

        if (anoAtual - getAno < 18 || getAno < 1885) return false
        if (mesAtual < getMes) return false
        if (diaAtual < getDia) return false

        return true

    }

    function addMensagens() {
        const p = document.createElement('p')
        const nasc = document.getElementById('nascimento')

        p.innerText = 'Data de nascimento inválida, digite novamente'
        p.classList.add('invalido')
        nasc.after(p);

    }

    function removeElementos() {
        if (document.querySelector('.invalido') !== null) {
            const apagarEl = document.querySelectorAll('.invalido');
            apagarEl.forEach(el => {
                el.remove()
            });
            return true
        }
        return false
    }

    if (document.querySelector('#volForm')) {
        const formulario = document.querySelector('#volForm')
        const nasc = document.getElementById('nascimento')
        console.log(nasc)


        formulario.addEventListener('submit', evento => {
            evento.preventDefault()
            removeElementos()

            if (!checaIdade(nasc.value)) return addMensagens()
            evento.target.submit()

        })
    }

})();
