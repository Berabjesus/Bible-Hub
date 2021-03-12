import React from 'react'

export const Home = () => {
  const [data, setData] = React.useState([1])

  const getUserFollowers = async () => {
    try {
      const response = await fetch('https://thingproxy.freeboard.io/fetch/http://api.biblia.com/v1/bible/find.txt?key=9f977d096e4fe0b62fc7877ca6d0a64b', {
        method: "GET",
      })
      const filtered = await response.json();
      return filtered;
    } catch (error) {
      return error;
    }
  }

  React.useEffect(()=> {
    // getUserFollowers().then(result => {
    //   setData(result)
    //   console.log(result);
      
    // })
  }, [])
  return (
    <div>
      <h1>Home</h1>
      <h2>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat eveniet quod tempora voluptates eaque, porro, illo numquam dignissimos iusto impedit laborum expedita unde adipisci quam dolore dolor ex accusamus repellat.
      Officiis vel tempora, corporis totam sunt autem eligendi aut quod molestias aspernatur commodi nisi odit blanditiis, delectus sit? Blanditiis nostrum, numquam velit eos officiis sit rem magni nobis illo corporis.
      Ex ipsam fuga eum et non facilis dolores? Molestiae quis reiciendis labore deserunt, dolores saepe accusantium pariatur iste aperiam blanditiis iusto eum adipisci delectus? Ipsa ex aperiam earum at impedit!
      Itaque, dicta. Ab laboriosam dolorum aliquid dicta eaque earum mollitia aut, vel dignissimos assumenda dolor itaque animi exercitationem accusantium expedita nesciunt minima fuga. Ad saepe numquam, inventore nobis ex repudiandae.
      Aliquid tempora dolores eius, molestiae, dolore accusantium cum voluptatem facere ipsum dolorum quisquam quos sapiente, enim maxime libero nostrum rerum. Reprehenderit laborum est aspernatur dolor non dolore, accusantium odit totam?
      Doloremque cum at iste inventore necessitatibus, sapiente, culpa labore accusamus, vel dolorem aliquid modi dolore perferendis vero non aliquam quis assumenda sunt soluta beatae earum eum. Consequuntur debitis quibusdam perspiciatis.
      Eligendi quisquam ea cupiditate odio ad magnam quibusdam consequatur numquam mollitia! Tempora voluptas, hic incidunt, nesciunt necessitatibus dolorem harum laborum eos accusantium dolore, quam unde eaque dignissimos eum error. Ullam.
      Ex itaque perferendis reprehenderit cum. Temporibus iste, ipsam vitae nemo quaerat repellendus laboriosam. Facilis cupiditate libero facere aliquam ex quaerat veritatis itaque, ipsam aspernatur? Commodi error aut iure consequuntur cumque?
      Facere, sequi ullam ipsam dicta hic delectus vitae dolores aliquid similique quod ea quo neque atque quasi natus ratione est iure nam iste provident maxime corrupti vero! Nesciunt, quas maiores!
      Alias adipisci maiores quia dignissimos pariatur repudiandae perferendis rem qui, maxime dolores assumenda voluptatibus a debitis velit. Ad doloremque voluptatum consequuntur, atque unde, officiis molestias architecto omnis, cupiditate facere voluptas!
      Magnam amet libero praesentium nobis, officiis officia doloribus dignissimos consequatur perspiciatis nam, magni asperiores dolorem ducimus beatae quidem aperiam quas quibusdam pariatur recusandae perferendis omnis! Assumenda, libero. Recusandae, cumque illo!
      Delectus ex aliquam voluptatibus aut optio porro veniam, distinctio perferendis voluptate qui incidunt sit. Optio molestiae eveniet illum illo. Assumenda atque porro, possimus doloremque repudiandae harum iure distinctio quod odit!
      Minima quisquam eius est corporis voluptatibus, quibusdam quasi optio omnis exercitationem voluptates natus dignissimos veniam et repellendus quia molestiae ratione excepturi praesentium vero? Fugit, fuga. Pariatur dignissimos laboriosam nulla sapiente.
      Itaque dolore autem, illo deleniti, rerum dicta ab a, aperiam minus nobis tempora! Architecto tempora ipsam quibusdam, repellat facilis porro. Natus officia fugit autem aperiam officiis sed repellat nesciunt quibusdam.
      Delectus nam sapiente rerum at labore dicta numquam. Consequatur aperiam quaerat molestiae, quia alias in quod tempore, provident ex reprehenderit pariatur quis molestias beatae facere, ullam voluptates doloremque aliquam iste.
      Cupiditate consequuntur fugit delectus vel perferendis qui fugiat reiciendis ipsum pariatur soluta quaerat accusamus saepe, itaque eius. Repellendus non ea dolor, qui voluptatem laboriosam nihil et. Doloribus autem ad laboriosam.
      Quaerat adipisci nisi repellendus quod ipsam corporis saepe facere libero, nemo harum vel explicabo illum sequi. Quae recusandae, necessitatibus omnis nisi expedita quasi? Numquam ex fugit similique inventore eum officiis?
      Perferendis distinctio voluptates deleniti quia, tempore quod voluptatum alias a ab laborum quaerat adipisci qui? Assumenda, at. Asperiores rerum dolorem, quis tempora officia reiciendis, odio odit reprehenderit dolorum ab libero?
      Nihil, omnis, veritatis vel minima, maiores optio alias voluptatum eveniet tempora et aspernatur magnam nisi. Odit, fugiat velit magni sint itaque natus, rerum iste nostrum facilis hic debitis animi! Illum.
      Cum vero sunt voluptatum excepturi! Nobis consequuntur sapiente non? Ex commodi laboriosam quo maiores odit earum animi dolorem possimus tenetur quibusdam eaque molestiae, ullam velit optio quas minima ipsa ducimus?
      Eum, consectetur. Aperiam aliquam, cum, temporibus accusamus eius mollitia assumenda illo perspiciatis repellendus animi atque dolorum sequi rerum esse totam magnam. Consequuntur quasi unde inventore rem beatae corrupti, blanditiis earum!
      Sint corrupti velit alias, repellat minus aperiam ex quam, debitis quis tempora fugit atque magni illo reprehenderit in soluta. Facere consequatur quis magnam repudiandae quod eum blanditiis at dolor optio.
      Ut quidem rerum nostrum! Totam, assumenda iusto debitis sunt consequatur temporibus facilis ea voluptatem velit enim fugit dicta nobis autem earum quas quia odio aliquid quibusdam maxime eligendi eos illum.
      Itaque odit odio reprehenderit minus ratione ipsa modi velit possimus, harum error veritatis, iure adipisci dolorem consectetur labore, ex rem ut quis atque distinctio doloribus quam! Eum velit ipsam aliquid?
      Amet asperiores mollitia culpa vel facilis porro minima, ut recusandae obcaecati quisquam consectetur placeat sint error voluptatum nostrum quo, tenetur id soluta consequatur veniam deleniti exercitationem necessitatibus? Ratione, vel consequuntur.
      Quo fugiat laudantium neque. Repudiandae maxime eligendi in neque voluptatum obcaecati iure nesciunt natus tempore vero eius vel temporibus, voluptatem, deleniti dolor laborum possimus repellendus facere? Ad non vitae recusandae!
      Eveniet aspernatur ratione quibusdam impedit, id saepe cumque necessitatibus vitae veniam quasi, quam porro itaque aliquid distinctio magni eius nemo quos harum sit ducimus enim! Dignissimos sed placeat ex quasi.
      Nulla iste fugit repellendus libero error nisi dolorum? Nihil, dolore dolores voluptatum earum illum, nam ipsa consectetur maiores nemo harum impedit. Id fuga nisi sit officia hic consectetur ab unde!
      Numquam, voluptatibus quas? Impedit est corporis reprehenderit magnam voluptate culpa reiciendis temporibus eaque, odit laudantium et accusantium ex dolor dignissimos ipsum esse praesentium nostrum quas ea! Fugit dolore exercitationem commodi!
      Expedita sit suscipit tempora odio adipisci, accusantium fuga aliquid, minus molestiae perspiciatis quos officiis! Tenetur, eligendi! Officia beatae ea labore eos ut libero itaque laborum quia exercitationem, nulla autem praesentium.
      Tempora voluptates praesentium alias ea quasi nam harum quae deleniti reiciendis eum dicta, minima, dolorum illum quibusdam magni consectetur voluptatum omnis perferendis ipsa fugiat provident hic ab blanditiis id? Possimus.
      Eius possimus iure eveniet? Quibusdam delectus deserunt nemo eos ipsum iste cumque, excepturi optio molestiae. Commodi natus laborum, totam similique ipsum itaque atque accusamus aliquid inventore. Distinctio facilis modi qui.
      Voluptates saepe illum adipisci ab tempore fugit laborum temporibus dolorum atque consequatur, nihil voluptas. Repellat odit accusantium illo tempore labore saepe quisquam totam pariatur, dolorum fugiat vel sit praesentium dolores.
      Delectus iusto illo quasi pariatur, corrupti, esse ad maxime repellat provident nihil natus explicabo. Reprehenderit dicta est fuga, cum velit exercitationem quod quasi, quos impedit itaque consequuntur sed. Maxime, itaque.
      Molestiae corrupti asperiores doloribus, voluptate modi debitis. Soluta, harum culpa fugit beatae, dignissimos iure eligendi veniam molestias repudiandae sunt incidunt vel itaque eius cum eum possimus eaque dolorum animi sint.
      Deserunt voluptatem numquam, quas vero maiores tempora officiis voluptas ullam? Incidunt, minus? Maxime rerum commodi similique quisquam sint eos, aut quidem et? Quae quis, quasi magnam assumenda perferendis eum distinctio!
      Aperiam velit natus totam iste aliquid in corrupti optio inventore unde, ex soluta eum deleniti rerum fuga aliquam saepe autem, corporis, error asperiores illo fugit harum. Sequi non molestiae hic!
      Assumenda a quis debitis mollitia quibusdam! Quas debitis ipsam odit corporis fugit possimus quisquam numquam temporibus pariatur necessitatibus ipsum laudantium voluptates officiis maxime labore voluptatem quaerat repudiandae ab, beatae eligendi!
      Magni maxime sequi, temporibus ratione corporis quaerat rerum animi porro doloribus. Tempora perferendis veritatis, iste vero, quis, molestias praesentium minus voluptas excepturi ipsa obcaecati odio corrupti voluptatum recusandae deleniti accusantium.
      Voluptatem debitis, reiciendis dolorem repudiandae fugit ipsum doloribus quam autem error cum dignissimos obcaecati aut similique inventore iure accusamus officiis nobis! Maxime dolores dolor odio, quo ullam soluta. Nesciunt, voluptatem.
      Distinctio sequi non harum ab libero alias, eligendi atque praesentium eaque ullam doloremque nostrum enim, quas voluptatibus illo quos. Earum temporibus dignissimos, incidunt ipsa accusamus repellat voluptatibus quos accusantium harum.
      Veniam consequatur ad doloribus incidunt corporis saepe voluptates exercitationem quos, atque accusantium? Quas repudiandae provident culpa quaerat fugiat illo eligendi aliquam officia consectetur obcaecati, minus adipisci sed laudantium tempora necessitatibus!
      Ad, officia dignissimos saepe minus atque voluptate repellendus veritatis non, temporibus id aliquid quidem exercitationem animi nam eum ipsam necessitatibus quia praesentium ipsum libero commodi natus tempora, officiis nihil? Quaerat.
      Commodi, quo! Aspernatur, esse provident iure corporis, dignissimos exercitationem assumenda laborum ab rem qui repellendus placeat? Voluptatem nisi rerum, temporibus officiis distinctio veritatis necessitatibus explicabo, est eligendi voluptatum reiciendis non!
      Earum voluptates consequatur, dicta deleniti nam accusantium facere voluptatem. Est fugiat similique quos labore distinctio, optio consequuntur perspiciatis aspernatur culpa. Exercitationem neque sint perspiciatis officiis nemo repellendus quia nostrum distinctio.
      Officiis, quo tempora a soluta architecto sed totam laborum, veniam odio placeat tenetur unde quia expedita natus. Ratione vero nam non sequi enim, excepturi, quia corrupti commodi sunt, placeat quae?
      Deserunt perspiciatis dignissimos veritatis aut deleniti iure soluta neque, libero quas eius quos cumque odio earum accusantium quasi. Aut ut blanditiis repellat est minus earum ullam, delectus omnis reiciendis sint.
      Aspernatur at, quaerat dolorum saepe odit aut atque vero nulla in unde, quasi tempore debitis ea suscipit animi illum itaque! Magni a ab provident fugiat modi laborum sed autem ipsam.
      Voluptate doloribus dolores expedita sit. In minus voluptas quaerat necessitatibus possimus soluta incidunt sint at pariatur vel, illo explicabo modi? Illo nesciunt blanditiis enim nihil, ea suscipit quae asperiores. Tenetur.
      Ab voluptatem totam possimus at a, maxime animi optio consequatur ratione nisi officia modi commodi aut sed, quos incidunt temporibus vitae impedit eius nulla magni ducimus eveniet! Enim, voluptas nulla?</h2>
    </div>
  )
}

export default Home