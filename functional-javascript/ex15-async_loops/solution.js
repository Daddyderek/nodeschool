module.exports = (userIds, load, done, users = [], completed = 0) =>
  userIds.forEach((id, i) => {
    const completed = user => {
      users[i] = user;
      if (++completed === userIds.length) return done(users);
    }

    load(id, completed)
  });
