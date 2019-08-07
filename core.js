
let setrelation = (object, subject, relation, comment) => {
  if (!relation) {
    relation = false;
  }
  if (!comment) {
    comment = "without comment";
  }
  let check = true;
  for (let r of object.relations) {
    if (r.subject == subject) {
      r.relation = relation;
      r.comment = comment;
      check = false;
      break;
    }
  }
  if (check) {
    object.relations.push({ subject, relation, comment })
  }
}
