const graphql = require('graphql');
const _ = require('lodash');
const WordOfDay = require('../models/WordOfDay');

const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLID,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} = graphql;

const WordOfDayType = new GraphQLObjectType({
  name: 'WordOfDay',
  fields: () => ({
    id: { type: GraphQLID },
    text: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    word: {
      type: WordOfDayType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        // return _.find(words, { id: args.id });
        return WordOfDay.findById(args.id);
      },
    },
    words: {
      type: new GraphQLList(WordOfDayType),
      resolve(parent, args) {
        // return authors;
        return WordOfDay.find({});
      },
    },
  },
});

const Mutation = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addWordOfDay: {
      type: WordOfDayType,
      args: {
        text: { type: new GraphQLNonNull(GraphQLString) },
        date: { type: new GraphQLNonNull(GraphQLString) },
      },
      resolve(parent, args) {
        let wordOfDay = new WordOfDay({
          text: args.text,
          date: args.date,
        });
        return wordOfDay.save();
      },
    },
  },
});

module.exports = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});
