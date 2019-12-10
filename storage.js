function loadFile(input) {

    //Defining element to show the progress
    var elem = document.getElementById("myBar");
    var filetoUpload=input.files[0];

    //Initializing the reference of database with the filename
    var storageRef = firebase.storage().ref(filetoUpload.name);

    //Uploading file
    var task = storageRef.put(filetoUpload);
    task.on('state_changed',
        function progress(snapshot){
            var percentage = snapshot.bytesTransferred / snapshot.totalBytes * 100;
            //uploader.value = percentage;
            elem.style.width = parseInt(percentage) + '%';
            elem.innerHTML=parseInt(percentage)+'%';
        },
        function error(err){

        },
        function complete(){
            var downloadURL = task.snapshot.downloadURL;
        }
    );
}