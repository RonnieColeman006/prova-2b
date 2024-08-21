
let usuarios = [];

function validarUsuario(usuario) {
    if (!usuario || typeof usuario !== 'object') {
        return false;
    }
    if (!usuario.nome || typeof usuario.nome !== 'string' || usuario.nome.trim() === '') {
        return false;
    }
    if (!usuario.email || typeof usuario.email !== 'string' || usuario.email.trim() === '' || !validarEmail(usuario.email)) {
        return false;
    }
    return true;
}


function validarEmail(email) {
    const padraoEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return padraoEmail.test(email);
}

function adicionarUsuario(usuario) {
    if (validarUsuario(usuario)) {
        usuarios.push(usuario);
        console.log('Usuário adicionado com sucesso!');
    } else {
        console.log('Dados inválidos. Usuário não adicionado.');
    }
}

function listarUsuarios() {
    if (usuarios.length === 0) {
        console.log('Nenhum usuário cadastrado.');
    } else {
        console.log('Usuários cadastrados:');
        usuarios.forEach((usuario, index) => {
            console.log(`${index + 1}. Nome: ${usuario.nome}, Email: ${usuario.email}`);
        });
    }
}

adicionarUsuario({ nome: 'Gabriel França ', email: 'gabriel.franca@senai.com' });
adicionarUsuario({ nome: 'johnny Costa', email: 'johnny.costa@senai.com' });
listarUsuarios();
