/**
 * Created by Kira on 7/16/15.
 */

Errors = new Mongo.Collection(null);

throwError = function(message) {
    Errors.insert({message: message});
}