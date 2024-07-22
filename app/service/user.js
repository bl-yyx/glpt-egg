const Service = require('egg').Service;

class UserService extends Service {
    async find(uid) {
      try {
        // 假如我们拿到用户 id，从数据库获取用户详细信息
      const user = await this.app.mysql.select('girls');
      return { user };
      } catch (error) {
        console.log(error);
        return null
      }
    }
  }
  module.exports = UserService