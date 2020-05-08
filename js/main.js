const urlData1 = "https://brasil.io/dataset/covid19/caso/?is_last=True&place_type=city&state=PB&format=csv";
const urlData2 = "https://api.covid19api.com/total/country/brazil";
let dataAtu;


getData();
getDataBr(urlData2);

async function getDataBr(url) {
    const response = await fetch(url)
    const json = await response.json()
    showContent(json)
}

async function getData() {
    const response = await fetch(urlData1);
    const data = await response.text();
    let totalConfirmado = 0;
    let totalObitos = 0;

    const table = data.split('\n').slice(1, -1);

    table.forEach(row => {


        const columns = row.split(',');
        dataAtu = columns[0];
        const cidade = columns[2];
        const casosConfirmados = columns[4];
        const obitosConfirmados = columns[5];

        const tBody = `<tr>
        <td class="bg-info"><b>${cidade}</b></td>
        <td class="bg-warning text-center"><b>${casosConfirmados}</b></td>
        <td class="bg-danger text-center"><b>${obitosConfirmados}</b></td>
        </tr>`;

        $('tbody').append(tBody);

        totalConfirmado += parseInt(casosConfirmados);
        totalObitos += parseInt(obitosConfirmados);


    });
    $('#main-dados1 > div > div:nth-child(2) > div.p-2 > span.badge.badge-pill.badge-warning.m-0 > span').append(totalConfirmado);
    $('#main-dados1 > div > div:nth-child(2) > div.p-2 > span.badge.badge-pill.badge-danger.m-0.mt-1 > span').append(totalObitos);
    $('#main-dados1 > div > div:nth-child(3) > div.p-2 > span > span').append(formatDate(dataAtu, 'pt-br'));

}

function showContent(dataBr) {
    dataBr.forEach(element => {
        if (formatDate(element.Date) == dataAtu) {
            $('#main-dados1 > div > div:nth-child(1) > div.p-2 > span.badge.badge-pill.badge-warning.m-0 > span').append(element.Confirmed);
            $('#main-dados1 > div > div:nth-child(1) > div.p-2 > span.badge.badge-pill.badge-danger.m-0.mt-1 > span').append(element.Deaths);
            $('#main-dados1 > div > div:nth-child(1) > div.p-2 > span.badge.badge-pill.badge-success.m-0.mt-1 > span').append(element.Recovered);
        }

    });

}


function formatDate(data, formato) {
    if (formato == 'pt-br') {
        return (data.substr(0, 10).split('-').reverse().join('/'));
    } else {
        return (data.substr(0, 10).split('/').reverse().join('-'));
    }
}