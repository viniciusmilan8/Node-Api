const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, 'O nome de usuário é obrigatório'],
  },
  email: {
    type: String,
    required: [true, 'O email é obrigatório'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'A senha é obrigatória'],
  },
});

// Antes de salvar o usuário, hash a senha
userSchema.pre('save', async function (next) {
  const user = this;
  if (user.isModified('password') || user.isNew) {
    try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(user.password, salt);
      user.password = hashedPassword;
      next();
    } catch (err) {
      return next(err);
    }
  } else {
    return next();
  }
});

// Método para comparar senhas
userSchema.methods.comparePassword = function (password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
