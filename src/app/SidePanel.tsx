import { twMerge } from "tailwind-merge"

export default function SidePanel(props: { className?: string }) {
  return (
    <aside
      className={twMerge("min-w-[300px] w-[300px]", "bg-neutral-800 text-white", "flex flex-col", props.className)}
    >
      <div className={"p-4"}>
        <span className={"text-2xl font-semibold"}>My logo</span>
      </div>
      <div className={"overflow-y-scroll grow"}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus cupiditate eligendi laboriosam sit
        voluptatum. Amet architecto enim, fuga in inventore iusto laboriosam libero quasi, quisquam quod repellendus
        velit veritatis. Aut autem beatae deleniti dolore, doloremque earum eos est et eveniet excepturi harum, id illo
        incidunt ipsum iste iusto magnam qui quidem soluta temporibus unde, voluptates voluptatum. A adipisci, alias
        aliquam aliquid animi commodi consectetur consequuntur cum, debitis deserunt dicta dolor dolorem eaque eius
        excepturi hic ipsum iusto magni necessitatibus nisi nulla perspiciatis possimus praesentium quo quod quos vel
        vero. Architecto asperiores consequatur debitis dignissimos doloribus earum, id laudantium magnam praesentium
        quas saepe tenetur vitae voluptatem voluptates voluptatibus! Dignissimos dolorem id nihil nulla quidem! Ab
        assumenda cum inventore ipsa itaque laboriosam suscipit totam! Accusamus consequatur eos inventore quidem vero?
        Architecto commodi consectetur consequatur cupiditate delectus dicta distinctio dolorem ducimus enim, error esse
        ex, excepturi fuga illum ipsa minima minus molestiae neque numquam obcaecati optio qui quibusdam reiciendis
        repellat reprehenderit tempora ut! Fuga laudantium natus veritatis. Accusantium aliquid architecto consequuntur
        corporis cupiditate dignissimos dolor doloribus ea eius, est excepturi explicabo fugiat harum illum impedit in
        incidunt ipsa magnam, modi nam natus necessitatibus nesciunt nulla numquam obcaecati omnis placeat quas quasi
        repellat repudiandae rerum sequi suscipit temporibus ullam ut voluptates voluptatibus! Accusamus ducimus
        laudantium quas rem similique sint? Asperiores autem beatae, corporis culpa cum delectus distinctio eligendi eos
        est et eum fuga harum ipsa laboriosam laudantium maxime nam natus neque, nihil obcaecati pariatur quia
        recusandae reprehenderit rerum sapiente sed sunt suscipit tenetur unde vel veniam voluptates voluptatibus
        voluptatum. Accusamus, fugit, voluptate. Ab asperiores blanditiis consectetur, debitis exercitationem impedit
        labore perferendis porro tempore voluptatem. Aliquid expedita impedit ipsam, itaque neque, nisi provident quasi
        quidem ratione rem reprehenderit repudiandae similique totam voluptas voluptatem! Aspernatur esse, ipsa iste
        iure odit praesentium sequi voluptatem! Accusamus ad aperiam, cum cupiditate dolores ducimus, eum illo impedit
        incidunt ipsa iure laboriosam maiores officia placeat quam quidem quisquam reprehenderit sapiente sunt unde?
        Aliquid aspernatur atque cupiditate ducimus eius ex fugit, ipsum minima molestiae perspiciatis? A consectetur
        dignissimos distinctio enim eos eum, maiores maxime minima minus quam, quos sapiente. Animi aspernatur atque ea
        temporibus, ullam voluptas. Aliquam aliquid consequuntur cumque dolore eveniet id ipsum iusto modi mollitia nisi
        nulla omnis placeat possimus quam rem, repellendus repudiandae ut vel, vitae voluptas! Aperiam cupiditate dolore
        ex, facilis harum ipsa iste magni nisi odit possimus quis, quisquam quo similique tempora, vel. Aliquid amet
        dicta dolores error et illum in, inventore molestiae, odit quo quos reiciendis repellendus voluptatum? Beatae
        deserunt inventore minus optio recusandae? A aliquam dolorem ducimus, esse fugit quaerat quas totam veniam!
        Accusamus ad culpa dicta distinctio dolore doloribus earum eum exercitationem expedita ipsam itaque iusto
        laborum libero magni nulla numquam porro provident quam qui, recusandae reiciendis reprehenderit repudiandae
        saepe soluta temporibus veniam voluptate voluptatem? Blanditiis explicabo, totam. Accusantium alias at cumque
        deserunt dicta dolorum ducimus ea earum eum exercitationem, fuga, hic iusto minus non numquam, officia omnis
        optio perferendis perspiciatis possimus repudiandae suscipit veniam? Adipisci deserunt ducimus eius eos, et
        libero omnis vero?
      </div>
    </aside>
  )
}
