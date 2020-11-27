// NavBar
function slideDown() {
    document.body.style.overflowY = 'auto';
    document.getElementById('navbar').style.display = 'block';

    window.scrollTo(0, window.innerHeight);
}

function slideUp() {
    document.body.style.overflowY = 'hidden';
    document.getElementById('navbar').style.display = 'none';

    window.scrollTo(0, 0);
}

// Disponibilidade
function disponibilidade() {
    const idade = document.getElementsByName('idade')[0].value;
    const sexo = document.getElementsByName('sexo')[0].value;
    const disponibilidadeDiv = document.getElementById('disponibilidade');

    if (!idade || idade > 25 || idade < 6) return window.alert('Preencha Todos os Dados!');

    // Nota Futura, não fazer isto sem JSX
    disponibilidadeDiv.innerHTML = `
    ${sexo === 'femi' ? `
        <input type="checkbox" name="voleibol" />
        <label for="voleibol">Voleibol ${idade > 10 ? 'Juvenis Feminina - 2ª e 4ª - Pavilhão da ESFH' : 'Iniciadas Feminino - 3ª e 5ª - Pavilhão da Egas Moniz'}</label><br />
    ` : `
        <input type="hidden" name="voleibol" value="off" />
    `}

        <input type="checkbox" name="padel" />
        <label for="padel">Padel - 4ª e 5ª - Top Padel</label><br />

        <input type="checkbox" name="tenis" />
        <label for="tenis">Ténis - 2ª, 3ª e 4ª - Pavilhão da Egas Moniz</label><br />

        <input type="checkbox" name="danca" />
        <label for="danca">Dança - 3ª e 4ª - Auditório Polivalente da ESFH</label><br />

        <input type="checkbox" name="btt" />
        <label for="btt">BTT - 2ª e 4ª - Escola Egas Moniz</label><br />

        <div style="text-align: center;">
            <input type="button" onclick="submitForm()" value="Inscrever-me" />
        </div>
    `;
}

// Obrigar a escolher pelo menos um Desporto
function submitForm() {
    const sub = document.getElementsByName('voleibol')[0].checked ||
        document.getElementsByName('padel')[0].checked ||
        document.getElementsByName('tenis')[0].checked ||
        document.getElementsByName('danca')[0].checked ||
        document.getElementsByName('btt')[0].checked;

    if (!sub) return window.alert('Tem de Selecionar pelo Menos Um Desporto!');

    const pre = document.getElementById('preinscricao');

    // TODO: Integrar o recaptcha
    if (pre.checkValidity())
        pre.submit();
    else
        window.alert('Preencha Todos os Dados!');
}

// Validar Nome/Telemovel
document.getElementsByName('nome')[0].oninput = event => {
    if (/([A-Z][a-z]{2,} )([A-Z][a-z]{2,} )?([A-Z][a-z]{2,})/g.test(event.target.value))
        return event.target.setCustomValidity('');

    event.target.setCustomValidity('Nome Inválido!');
}

document.getElementsByName('telemovel')[0].oninput = event => {
    if (/^([+]\d{1,3})?\d{9}$/g.test(event.target.value))
        return event.target.setCustomValidity('');

    event.target.setCustomValidity('Número Inválido!');
}

// Easter Egg
function easterEgg(event) {
    if (event.shiftKey)
        document.getElementById('img').src = 'assets/gmd-directions_run-school-18dp.svg';
}

// Init
carouselInit(document.getElementById('carousel'));
modalInit(document.getElementById('modal'));
