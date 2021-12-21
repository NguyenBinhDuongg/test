function validate(){
    var _Name = document.getElementById('Name');
    var _Email = document.getElementById('Email');
    var _Subject = document.getElementById('Subject');
    var _Comment = document.getElementById('Comment');

    if(_Name.value == ''){
        _Name.classList.add('error');
        document.getElementById('er_Name').classList.remove('er');
        return false;
    }else{
        _Name.classList.remove('error');
        document.getElementById('er_Name').classList.add('er')
    }
    if(_Email.value == ''){
        _Email.classList.add('error');
        document.getElementById('er_Email').classList.remove('er');
        return false;
    }else{
        _Email.classList.remove('error');
        document.getElementById('er_Email').classList.add('er');
    }
    if(_Subject.value == ''){
        _Subject.classList.add('error');
        document.getElementById('er_Subject').classList.remove('er');
        return false;
    }else{
        _Subject.classList.remove('error');
        document.getElementById('er_Subject').classList.add('er');
    }
    if(_Comment.value == ''){
        _Comment.classList.add('error');
        document.getElementById('er_Comment').classList.remove('er');
        return false;
    }else{
        _Comment.classList.remove('error');
        document.getElementById('er_Comment').classList.add('er');
    }

}