module.exports = goodUsers =>
  validUsers =>
    validUsers.every( ({ id: vID }) =>
      goodUsers.some( ({ id: gID }) => vID === gID )
    );

