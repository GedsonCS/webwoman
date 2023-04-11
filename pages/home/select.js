function getselectArray(){
    return JSON.parse(localStorage.getItem('@KenzieSelectJob:jobs')) || []
}

function jobAlreadyExists(JobSearch){
    const selectJob = getselectArray()

    return selectJob.findIndex(job => job.id === JobSearch.id)
}

function selectAndRemove(job, button){
    const jobExists = jobAlreadyExists(job)
    let selectJobs = getselectArray()

    if(jobExists < 0){
        selectJobs.push(job)
        button.innerText = 'Remover Candidatura'
    }
    else{
        selectJobs.splice(jobExists, 1)
        button.innerText = 'Candidatar'
    }

    localStorage.setItem('@KenzieSelectJob:jobs', JSON.stringify(selectJobs))
}

