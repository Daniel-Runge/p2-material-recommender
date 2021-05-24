/**
 * @author Lars Hanse & Gustav Gussemand
 * @param User User object
 * @param Material Material object
 * @param Vote 1 eller -1 for upvote eller downvote
 */

function scoringAlgorithm(user, material, vote){
    const sql = `SELECT * FROM Ratings INNER JOIN Users ON Ratings.UserID=Users.UserID WHERE MaterialID =${Material.MAterialID}`;
}
