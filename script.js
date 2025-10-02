

function getQueryParams() {
    const params = {};
    const queryString = window.location.search.substring(1);
    const pairs = queryString.split("&");
    for (const pair of pairs) {
        const [key, value] = pair.split("=");
        params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
    console.log(params);
    return params;
}

let params = getQueryParams();

document.getElementById("full-name").textContent = `${params.firstName} ${params.middleName} ${params.lastName}`;
document.getElementById("img-photo").setAttribute("src", `public/images/${params.photo}`);
document.getElementById("birth-con").textContent = params.date;   
document.getElementById("email").textContent = params.email;
document.getElementById("gender").textContent = params.sex;
document.getElementById("civil").textContent = params.civil;
document.getElementById("nationality").textContent = params.nationality;
document.getElementById("religion").textContent = params.religion;
document.getElementById("contactNumber").textContent = params.contact;
document.getElementById("email").textContent = params.email;
document.getElementById("address").textContent = params.address;
document.getElementById("username").textContent = params.username;