export const loadInstallApps = () =>{
    try{
        const data = localStorage.getItem('installation')
        return data ? JSON.parse(data) : []
    } catch(err) {
        console.log(err);
    return [];
    }
}

// save

export const updateList = (app) =>{
    const installApps = loadInstallApps()
    try{
        const isDuplicate = installApps.some((a) => a.id === app.id)

        if(isDuplicate) return alert('Already Exists!')
            const updateInstallApps= [...installApps, app]
        localStorage.setItem('installation', JSON.stringify(updateInstallApps))
    } catch (err) {
    console.log(err);
    return;
  }
}

// Remove
export const removeFromInstallApps= (id) =>{
    const installApps = loadInstallApps()
    try{
        const updateInstallApps = installApps.filter((a) => a.id !== id)

        localStorage.setItem('installation', JSON.stringify(updateInstallApps))
    } catch (err) {
    console.log(err);
    return;
  }
}