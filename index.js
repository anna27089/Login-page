const toggler = document.getElementById(toggler);
toggler.addEventListener('click', function handleClick() {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
})
