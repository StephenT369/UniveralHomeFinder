require("dotenv").config();

var db = require("../models");

var passport = require("../config/passport");

var ZillowAPI = require("node-zillow");

var zApi = new ZillowAPI