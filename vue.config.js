module.exports = {
  devServer: {
    proxy: "http://hp-api.herokuapp.com/api",
  },
  publicPath: process.env.NODE_ENV === "production" ? "/vue-hogwarts/" : "/",
};
