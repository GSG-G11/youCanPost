const connection = require("./database/config/connection");
const dbBuild = require("./database/config/build");
const {
  store,
  selectAllUsers,
  selectUserByIdWithPassword,
  selectUserById,
  userWithName,
  userPosts,
  storePost,
  selectPost,
  selectAllPosts,
} = require("./database/queires");

beforeEach(() => dbBuild());

describe("Test database fuctions", () => {
  test("Get User By Id from users table", () => {
    const expected = "Muhammad";
    return selectUserById(1).then((data) => {
      console.log(data.rows);
      expect(data.rows[0].name).toEqual(expected);
    });
  });
  test("Get User By Id from users table", () => {
    const expected = "Noor";
    return selectUserById(2).then((data) => {
      expect(data.rows[0].name).toEqual(expected);
    });
  });

  test("Insert user into users table", () => {
    const expected = {
      name: "Saleh",
      password: "123123",
    };
    return store(expected.name, expected.password).then((data) => {
      expect(data.rows[0].name).toEqual(expected.name);
      expect(data.rows[0].password).toEqual(expected.password);
    });
  });
  test("Get All User from users table", () => {
    const expected = 7;
    return selectAllUsers().then((data) => {
      expect(data.rows.length).toBe(expected);
    });
  });
  test("Get All information about User from users table", () => {
    const expected = { id: 1, name: "Muhammad", password: "123" };
    return selectUserByIdWithPassword(1).then((data) => {
      expect(data.rows[0]).toEqual(expected);
    });
  });
  test("Get All information about User from users table By user name", () => {
    const expected = { id: 1, name: "Muhammad", password: "123" };
    return userWithName("Muhammad").then((data) => {
      expect(data.rows[0]).toEqual(expected);
    });
  });
  test("Insert post into posts table", () => {
    const expected = {
      title: "Saleh post",
      content: "my test post",
      user_id: 1,
    };
    return storePost(expected.user_id, expected.title, expected.content).then(
      (data) => {
        expect(data.rows[0].title).toEqual(expected.title);
        expect(data.rows[0].content).toEqual(expected.content);
      }
    );
  });
  test("get post information related to user id", () => {
    const expected = 3;
    return selectPost(2).then((data) => {
      expect(data.rows.length).toBe(expected);
    });
  });
  test("Get All posts from posts table", () => {
    const expected = 7;
    return selectAllUsers().then((data) => {
      expect(data.rows.length).toBe(expected);
    });
  });
});

afterAll(() => connection.end());
