// NavBar
function slideDown() {
    document.body.style.overflowY = 'auto';
    document.getElementById('navbar').style.display = 'block';

    const height = window.innerHeight;
    window.scrollBy(0, height - 54);
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
            <input type="button" onclick="openModalIf()" value="Pré-Inscrição" />
        </div>
    `;
}

// Obrigar a escolher pelo menos um Desporto
function openModalIf() {
    const open = document.getElementsByName('voleibol')[0].checked ||
        document.getElementsByName('padel')[0].checked ||
        document.getElementsByName('tenis')[0].checked ||
        document.getElementsByName('danca')[0].checked ||
        document.getElementsByName('btt')[0].checked;

    if (!open) return window.alert('Tem de Selecionar pelo Menos Um Desporto!');
    openModal('modal');
}

// Validar Nome/Telemovel
document.getElementsByName('nome')[0].oninput = event => {
    if (/([A-Z][a-z]{2,} )([A-Z][a-z]{2,} )?([A-Z][a-z]{2,})/g.test(event.target.value))
        return event.target.setCustomValidity('');

    event.target.setCustomValidity('Nome Inválido!');
}

document.getElementsByName('telemovel')[0].oninput = event => {
    if (/^([+]\d{2})?\d{10}$/g.test(event.target.value))
        return event.target.setCustomValidity('');

    event.target.setCustomValidity('Número Inválido!');
}

// Init
carouselInit(document.getElementById('carousel'));
modalInit(document.getElementById('modal'));
