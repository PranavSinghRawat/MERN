let searchbtn = document.querySelector('.search')
let usernameinp = document.querySelector('.usernameinp')
let card=document.querySelector('.card')


function getprofiledata(username) {
    return fetch(`https://api.github.com/users/${username}`).then(raw => {
        if (!raw.ok) {
            throw new Error('user not found')
        } else {
            return raw.json()
        }
    })
}
function getreps(username) {
    return fetch(`https://api.github.com/users/${username}/repos?sort=updated`).then(raw => {
        if (!raw.ok) {
            throw new Error('failed to fetch repos')
        } else {
            return raw.json();
        }
    })
}
function decoratedata(details) {
    console.log(details);
    let data = `<section class="max-w-4xl mx-auto mt-8 px-6">

  <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-6">

    <!-- Avatar -->
    <div class="flex justify-center">
      <img 
        src="${details.avatar_url}" 
        class="w-32 h-32 rounded-full border"
      >
    </div>

    <!-- User Info -->
    <div class="flex-1">

      <h2 class="text-2xl font-bold text-gray-800">
        ${details.name}
      </h2>

      <p class="text-gray-500">${details.login}</p>

      <p class="mt-3 text-gray-700">
        ${details.bio}
      </p>

      <!-- Stats -->
      <div class="flex gap-8 mt-4 text-sm text-gray-700">

        <div>
          <p class="font-semibold">Followers</p>
          <p>${details.followers}</p>
        </div>

        <div>
          <p class="font-semibold">Following</p>
          <p>${details.following}</p>
        </div>

        <div>
          <p class="font-semibold">Repos</p>
          <p>${details.public_repos}</p>
        </div>

      </div>

      <!-- Profile Button -->
      <a 
        href="${details.html_url}"
        class="inline-block mt-4 bg-gray-900 text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition"
      >
        View GitHub Profile
      </a>

    </div>

  </div>

</section>`
    card.innerHTML=data;
}


searchbtn.addEventListener('click', function () {
    let username = usernameinp.value.trim();
    if (username.length > 0) {
        getprofiledata(username).then(data => {
            decoratedata(data);
        })
    } else {
        alert();
    }
})