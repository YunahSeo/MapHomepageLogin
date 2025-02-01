document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 기본 폼 제출 방지

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const rememberMe = document.getElementById('rememberMe').checked;

    // 로그인 처리 로직 (예: API 호출 등)
    console.log('아이디:', username);
    console.log('비밀번호:', password);
    console.log('자동 로그인:', rememberMe);

    // 여기서 실제 로그인 로직을 추가하세요.
});