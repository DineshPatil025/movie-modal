const cl = console.log;

const showModalBtn = document.getElementById('showModalBtn');
const backDrop = document.getElementById('backDrop')
const ourModel = document.getElementById('ourModel')
const movieForm = document.getElementById('movieForm')
const titleIC = document.getElementById('title')
const imgURLIC = document.getElementById('imgURL')
const ratingIC = document.getElementById('rating')
const movieContainer = document.getElementById('movieContainer')
const modalClose = [...document.querySelectorAll('.modalClose')]

const movieArray = [];


const onModalHandler = () => {
    backDrop.classList.toggle('active')
    ourModel.classList.toggle('active')
    movieForm.reset();
}

const templating = (arr) =>{
    let result = ''
    arr.forEach(movieObj =>{
        result += `
                        <div class="col-md-4">  
                                <div class="card">
                                    <div class="card-header">
                                        <h3 class="m-0 text-capitalize">${movieObj.title}</h3>
                                    </div>
                                    <div class="card-body">
                                        <figure class="imgHolder m-0">

                                        <img src="${movieObj.url}" alt="">
                                            <figcaption>
                                                <p class="m-0">Rating : ${movieObj.rating}</p>
                                            </figcaption>
                                        </figure>

                                    </div>
                                    <div class="card-footer text-right d-flex justify-content-between">
                                        <button class="btn btn-primary">Edit</button>
                                        <button class="btn btn-danger">Delete</button>
                                    </div>
                                </div>
                         </div>
                 `
    })

    movieContainer.innerHTML = result;

}

templating(movieArray)


showModalBtn.addEventListener('click', onModalHandler)

modalClose.forEach(ele => {
    ele.addEventListener('click', () => {
  
        onModalHandler();
    })
})

const onmovieFormSubmit = (ele) => {
    ele.preventDefault();
    let movieObj = {
        title: titleIC.value,
        url: imgURLIC.value,
        rating: ratingIC.value
    }
    movieArray.push(movieObj)
    cl(movieArray)
    templating(movieArray)
    onModalHandler();
    ele.target.reset();
}

backDrop.addEventListener('click', modalClose)
movieForm.addEventListener('submit', onmovieFormSubmit)
