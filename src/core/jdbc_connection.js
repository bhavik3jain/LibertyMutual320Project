var oracledb = require('oracledb');

export function connect_oracle(user, password, hostname, port)
{
  var connection = oracledb.getConnection(
    {
      user          : this.user,
      password      : this.password,
      connectString : "jdbc:oracle:thin:@" + hostname+ ":" + port +":libdb"
    });

    return connection;
}
