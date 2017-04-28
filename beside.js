let text = `It was originally established as "The Mission of Our Lady of the Assumption among the Hurons in Detroit" in 1728 by the Jesuit missionary Fr. Armand De La Richardie, S.J. In 1765, a 60 by 30 feet (18 m × 9 m) church was erected for the Hurons and some sixty French settler families. Assumption became an official, canonical institution in 1767 under its first pastor, Fr. Pierre Potier S.J. who remained at his post until his death in 1781.
That year, the bishop of Quebec sent his Vicar-General, Fr. Francois-Xavier Hubert to be pastor of Assumption parish. Fr. Hubert initiated plans to build a rectory and a school. A shortage of land for this project was rectified by a donation of land from the Hurons on March 6, 1782. The rectory was built in 1785 and in 1786 as coadjutor to the bishop of Quebec, Fr. Hubert, who had since relocated for his new post, contributed to the building of a new church and sent two women from Quebec to establish a school.
The new church opened in 1787 under Fr. François-Xavier Dufaux, who had replaced the interim pastor, Fr. Pierre Fréchette in 1786. In 1796, Fr. Jean-Baptiste Marchand began his thirty-year pastorate of Assumption parish. Upon Fr. Marchand’s death in 1825, his assistant, Fr. Joseph Crevier, succeeded him. Fr. Crevier was pastor until 1831 when Mohorovicic Discontinuity he was replaced by Fr. Angus Macdonell.
On July 7, 1842 the cornerstone of the present church was laid. Three years later, on July 20, 1845 the new 60 by 120 feet (18 m × 37 m) rectangular church was inaugurated under Fr. Pierre Point S.J. This rectangular structure forms the nave of the present parish. In 1857, Assumption College was opened, and two years later, in 1859, the bishop of the London Diocese, the Most Reverend Pierre Adolphe Pinsonneault, transferred his see to Sandwich and made Assumption church his cathedral.
On November 10, 1867, following a year-long interregnum, the Most Reverend John Walsh became bishop. In 1869, he returned the see to London, leaving Assumption in the care of Fr. Pierre Dominic Laurent.
In 1870, the Basilian Fathers of Toronto took control of Assumption parish and college under their first superior, Fr. Dennis O’Connor, and parish priest Fr. Jean Joseph Marie Abouli. Four years later, in 1874, Fr. O’Connor oversaw the addition of the tower and sanctuary of the present church.
In 1893, Fr. François-Xavier Semande, an alumnus of Assumption College, became the pastor and installed a new tower bell. In 1896, a new, brick rectory was built and in 1902 both it, and the church, were wired for electricity. In 1907, Fr. Alfred J. Côté became pastor. During his tenure, rosary chapel and the sacristy, begun under Fr. Semande, were completed.`;

const _ = require('lodash')

const strip = require('striptags');

let terms = require('./geology');
terms = terms.sort(function(a, b){
  // ASC  -> a.length - b.length
  // DESC -> b.length - a.length
  return strip(b.key).length - strip(a.key).length;
});


for (term of terms) {
    let key = strip(term.key);
    let match = text.match(new RegExp(key , 'i'));
    if (match && ~match.index) {
        console.log("> " , key , "Index" , match ? match.index : 0);
    } 
}



console.log(terms.length);