
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model addresses
 * 
 */
export type addresses = $Result.DefaultSelection<Prisma.$addressesPayload>
/**
 * Model cart_items
 * 
 */
export type cart_items = $Result.DefaultSelection<Prisma.$cart_itemsPayload>
/**
 * Model carts
 * 
 */
export type carts = $Result.DefaultSelection<Prisma.$cartsPayload>
/**
 * Model categories
 * 
 */
export type categories = $Result.DefaultSelection<Prisma.$categoriesPayload>
/**
 * Model order_items
 * 
 */
export type order_items = $Result.DefaultSelection<Prisma.$order_itemsPayload>
/**
 * Model orders
 * 
 */
export type orders = $Result.DefaultSelection<Prisma.$ordersPayload>
/**
 * Model product_images
 * 
 */
export type product_images = $Result.DefaultSelection<Prisma.$product_imagesPayload>
/**
 * Model product_reviews
 * This table contains check constraints and requires additional setup for migrations. Visit https://pris.ly/d/check-constraints for more info.
 */
export type product_reviews = $Result.DefaultSelection<Prisma.$product_reviewsPayload>
/**
 * Model product_variants
 * 
 */
export type product_variants = $Result.DefaultSelection<Prisma.$product_variantsPayload>
/**
 * Model products
 * 
 */
export type products = $Result.DefaultSelection<Prisma.$productsPayload>
/**
 * Model users
 * 
 */
export type users = $Result.DefaultSelection<Prisma.$usersPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.addresses.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Addresses
   * const addresses = await prisma.addresses.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.addresses`: Exposes CRUD operations for the **addresses** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.addresses.findMany()
    * ```
    */
  get addresses(): Prisma.addressesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.cart_items`: Exposes CRUD operations for the **cart_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Cart_items
    * const cart_items = await prisma.cart_items.findMany()
    * ```
    */
  get cart_items(): Prisma.cart_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carts`: Exposes CRUD operations for the **carts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carts
    * const carts = await prisma.carts.findMany()
    * ```
    */
  get carts(): Prisma.cartsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.categories`: Exposes CRUD operations for the **categories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.categories.findMany()
    * ```
    */
  get categories(): Prisma.categoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order_items`: Exposes CRUD operations for the **order_items** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Order_items
    * const order_items = await prisma.order_items.findMany()
    * ```
    */
  get order_items(): Prisma.order_itemsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orders`: Exposes CRUD operations for the **orders** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.orders.findMany()
    * ```
    */
  get orders(): Prisma.ordersDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_images`: Exposes CRUD operations for the **product_images** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_images
    * const product_images = await prisma.product_images.findMany()
    * ```
    */
  get product_images(): Prisma.product_imagesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_reviews`: Exposes CRUD operations for the **product_reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_reviews
    * const product_reviews = await prisma.product_reviews.findMany()
    * ```
    */
  get product_reviews(): Prisma.product_reviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product_variants`: Exposes CRUD operations for the **product_variants** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Product_variants
    * const product_variants = await prisma.product_variants.findMany()
    * ```
    */
  get product_variants(): Prisma.product_variantsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.products`: Exposes CRUD operations for the **products** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.products.findMany()
    * ```
    */
  get products(): Prisma.productsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users`: Exposes CRUD operations for the **users** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.users.findMany()
    * ```
    */
  get users(): Prisma.usersDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    addresses: 'addresses',
    cart_items: 'cart_items',
    carts: 'carts',
    categories: 'categories',
    order_items: 'order_items',
    orders: 'orders',
    product_images: 'product_images',
    product_reviews: 'product_reviews',
    product_variants: 'product_variants',
    products: 'products',
    users: 'users'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "addresses" | "cart_items" | "carts" | "categories" | "order_items" | "orders" | "product_images" | "product_reviews" | "product_variants" | "products" | "users"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      addresses: {
        payload: Prisma.$addressesPayload<ExtArgs>
        fields: Prisma.addressesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.addressesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.addressesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findFirst: {
            args: Prisma.addressesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.addressesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          findMany: {
            args: Prisma.addressesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          create: {
            args: Prisma.addressesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          createMany: {
            args: Prisma.addressesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.addressesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          delete: {
            args: Prisma.addressesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          update: {
            args: Prisma.addressesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          deleteMany: {
            args: Prisma.addressesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.addressesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.addressesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>[]
          }
          upsert: {
            args: Prisma.addressesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$addressesPayload>
          }
          aggregate: {
            args: Prisma.AddressesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddresses>
          }
          groupBy: {
            args: Prisma.addressesGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressesGroupByOutputType>[]
          }
          count: {
            args: Prisma.addressesCountArgs<ExtArgs>
            result: $Utils.Optional<AddressesCountAggregateOutputType> | number
          }
        }
      }
      cart_items: {
        payload: Prisma.$cart_itemsPayload<ExtArgs>
        fields: Prisma.cart_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cart_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cart_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findFirst: {
            args: Prisma.cart_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cart_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          findMany: {
            args: Prisma.cart_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          create: {
            args: Prisma.cart_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          createMany: {
            args: Prisma.cart_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cart_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          delete: {
            args: Prisma.cart_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          update: {
            args: Prisma.cart_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          deleteMany: {
            args: Prisma.cart_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cart_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cart_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>[]
          }
          upsert: {
            args: Prisma.cart_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cart_itemsPayload>
          }
          aggregate: {
            args: Prisma.Cart_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCart_items>
          }
          groupBy: {
            args: Prisma.cart_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cart_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Cart_itemsCountAggregateOutputType> | number
          }
        }
      }
      carts: {
        payload: Prisma.$cartsPayload<ExtArgs>
        fields: Prisma.cartsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.cartsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.cartsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findFirst: {
            args: Prisma.cartsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.cartsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          findMany: {
            args: Prisma.cartsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          create: {
            args: Prisma.cartsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          createMany: {
            args: Prisma.cartsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.cartsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          delete: {
            args: Prisma.cartsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          update: {
            args: Prisma.cartsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          deleteMany: {
            args: Prisma.cartsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.cartsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.cartsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>[]
          }
          upsert: {
            args: Prisma.cartsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$cartsPayload>
          }
          aggregate: {
            args: Prisma.CartsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarts>
          }
          groupBy: {
            args: Prisma.cartsGroupByArgs<ExtArgs>
            result: $Utils.Optional<CartsGroupByOutputType>[]
          }
          count: {
            args: Prisma.cartsCountArgs<ExtArgs>
            result: $Utils.Optional<CartsCountAggregateOutputType> | number
          }
        }
      }
      categories: {
        payload: Prisma.$categoriesPayload<ExtArgs>
        fields: Prisma.categoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.categoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.categoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findFirst: {
            args: Prisma.categoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.categoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          findMany: {
            args: Prisma.categoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          create: {
            args: Prisma.categoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          createMany: {
            args: Prisma.categoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.categoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          delete: {
            args: Prisma.categoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          update: {
            args: Prisma.categoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          deleteMany: {
            args: Prisma.categoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.categoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.categoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>[]
          }
          upsert: {
            args: Prisma.categoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$categoriesPayload>
          }
          aggregate: {
            args: Prisma.CategoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategories>
          }
          groupBy: {
            args: Prisma.categoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.categoriesCountArgs<ExtArgs>
            result: $Utils.Optional<CategoriesCountAggregateOutputType> | number
          }
        }
      }
      order_items: {
        payload: Prisma.$order_itemsPayload<ExtArgs>
        fields: Prisma.order_itemsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.order_itemsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.order_itemsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findFirst: {
            args: Prisma.order_itemsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.order_itemsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          findMany: {
            args: Prisma.order_itemsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          create: {
            args: Prisma.order_itemsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          createMany: {
            args: Prisma.order_itemsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.order_itemsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          delete: {
            args: Prisma.order_itemsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          update: {
            args: Prisma.order_itemsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          deleteMany: {
            args: Prisma.order_itemsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.order_itemsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.order_itemsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>[]
          }
          upsert: {
            args: Prisma.order_itemsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$order_itemsPayload>
          }
          aggregate: {
            args: Prisma.Order_itemsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder_items>
          }
          groupBy: {
            args: Prisma.order_itemsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsGroupByOutputType>[]
          }
          count: {
            args: Prisma.order_itemsCountArgs<ExtArgs>
            result: $Utils.Optional<Order_itemsCountAggregateOutputType> | number
          }
        }
      }
      orders: {
        payload: Prisma.$ordersPayload<ExtArgs>
        fields: Prisma.ordersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ordersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ordersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findFirst: {
            args: Prisma.ordersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ordersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          findMany: {
            args: Prisma.ordersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          create: {
            args: Prisma.ordersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          createMany: {
            args: Prisma.ordersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ordersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          delete: {
            args: Prisma.ordersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          update: {
            args: Prisma.ordersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          deleteMany: {
            args: Prisma.ordersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ordersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ordersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>[]
          }
          upsert: {
            args: Prisma.ordersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ordersPayload>
          }
          aggregate: {
            args: Prisma.OrdersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrders>
          }
          groupBy: {
            args: Prisma.ordersGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrdersGroupByOutputType>[]
          }
          count: {
            args: Prisma.ordersCountArgs<ExtArgs>
            result: $Utils.Optional<OrdersCountAggregateOutputType> | number
          }
        }
      }
      product_images: {
        payload: Prisma.$product_imagesPayload<ExtArgs>
        fields: Prisma.product_imagesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_imagesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_imagesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findFirst: {
            args: Prisma.product_imagesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_imagesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          findMany: {
            args: Prisma.product_imagesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          create: {
            args: Prisma.product_imagesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          createMany: {
            args: Prisma.product_imagesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_imagesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          delete: {
            args: Prisma.product_imagesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          update: {
            args: Prisma.product_imagesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          deleteMany: {
            args: Prisma.product_imagesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_imagesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_imagesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>[]
          }
          upsert: {
            args: Prisma.product_imagesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_imagesPayload>
          }
          aggregate: {
            args: Prisma.Product_imagesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_images>
          }
          groupBy: {
            args: Prisma.product_imagesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_imagesCountArgs<ExtArgs>
            result: $Utils.Optional<Product_imagesCountAggregateOutputType> | number
          }
        }
      }
      product_reviews: {
        payload: Prisma.$product_reviewsPayload<ExtArgs>
        fields: Prisma.product_reviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_reviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_reviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>
          }
          findFirst: {
            args: Prisma.product_reviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_reviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>
          }
          findMany: {
            args: Prisma.product_reviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>[]
          }
          create: {
            args: Prisma.product_reviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>
          }
          createMany: {
            args: Prisma.product_reviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_reviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>[]
          }
          delete: {
            args: Prisma.product_reviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>
          }
          update: {
            args: Prisma.product_reviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>
          }
          deleteMany: {
            args: Prisma.product_reviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_reviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_reviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>[]
          }
          upsert: {
            args: Prisma.product_reviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_reviewsPayload>
          }
          aggregate: {
            args: Prisma.Product_reviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_reviews>
          }
          groupBy: {
            args: Prisma.product_reviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_reviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_reviewsCountArgs<ExtArgs>
            result: $Utils.Optional<Product_reviewsCountAggregateOutputType> | number
          }
        }
      }
      product_variants: {
        payload: Prisma.$product_variantsPayload<ExtArgs>
        fields: Prisma.product_variantsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.product_variantsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.product_variantsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>
          }
          findFirst: {
            args: Prisma.product_variantsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.product_variantsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>
          }
          findMany: {
            args: Prisma.product_variantsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>[]
          }
          create: {
            args: Prisma.product_variantsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>
          }
          createMany: {
            args: Prisma.product_variantsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.product_variantsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>[]
          }
          delete: {
            args: Prisma.product_variantsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>
          }
          update: {
            args: Prisma.product_variantsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>
          }
          deleteMany: {
            args: Prisma.product_variantsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.product_variantsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.product_variantsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>[]
          }
          upsert: {
            args: Prisma.product_variantsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$product_variantsPayload>
          }
          aggregate: {
            args: Prisma.Product_variantsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct_variants>
          }
          groupBy: {
            args: Prisma.product_variantsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Product_variantsGroupByOutputType>[]
          }
          count: {
            args: Prisma.product_variantsCountArgs<ExtArgs>
            result: $Utils.Optional<Product_variantsCountAggregateOutputType> | number
          }
        }
      }
      products: {
        payload: Prisma.$productsPayload<ExtArgs>
        fields: Prisma.productsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.productsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.productsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findFirst: {
            args: Prisma.productsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.productsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          findMany: {
            args: Prisma.productsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          create: {
            args: Prisma.productsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          createMany: {
            args: Prisma.productsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.productsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          delete: {
            args: Prisma.productsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          update: {
            args: Prisma.productsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          deleteMany: {
            args: Prisma.productsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.productsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.productsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>[]
          }
          upsert: {
            args: Prisma.productsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$productsPayload>
          }
          aggregate: {
            args: Prisma.ProductsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProducts>
          }
          groupBy: {
            args: Prisma.productsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductsGroupByOutputType>[]
          }
          count: {
            args: Prisma.productsCountArgs<ExtArgs>
            result: $Utils.Optional<ProductsCountAggregateOutputType> | number
          }
        }
      }
      users: {
        payload: Prisma.$usersPayload<ExtArgs>
        fields: Prisma.usersFieldRefs
        operations: {
          findUnique: {
            args: Prisma.usersFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.usersFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findFirst: {
            args: Prisma.usersFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.usersFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          findMany: {
            args: Prisma.usersFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          create: {
            args: Prisma.usersCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          createMany: {
            args: Prisma.usersCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.usersCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          delete: {
            args: Prisma.usersDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          update: {
            args: Prisma.usersUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          deleteMany: {
            args: Prisma.usersDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.usersUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.usersUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>[]
          }
          upsert: {
            args: Prisma.usersUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$usersPayload>
          }
          aggregate: {
            args: Prisma.UsersAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers>
          }
          groupBy: {
            args: Prisma.usersGroupByArgs<ExtArgs>
            result: $Utils.Optional<UsersGroupByOutputType>[]
          }
          count: {
            args: Prisma.usersCountArgs<ExtArgs>
            result: $Utils.Optional<UsersCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    addresses?: addressesOmit
    cart_items?: cart_itemsOmit
    carts?: cartsOmit
    categories?: categoriesOmit
    order_items?: order_itemsOmit
    orders?: ordersOmit
    product_images?: product_imagesOmit
    product_reviews?: product_reviewsOmit
    product_variants?: product_variantsOmit
    products?: productsOmit
    users?: usersOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type AddressesCountOutputType
   */

  export type AddressesCountOutputType = {
    orders_orders_billing_address_idToaddresses: number
    orders_orders_shipping_address_idToaddresses: number
  }

  export type AddressesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders_orders_billing_address_idToaddresses?: boolean | AddressesCountOutputTypeCountOrders_orders_billing_address_idToaddressesArgs
    orders_orders_shipping_address_idToaddresses?: boolean | AddressesCountOutputTypeCountOrders_orders_shipping_address_idToaddressesArgs
  }

  // Custom InputTypes
  /**
   * AddressesCountOutputType without action
   */
  export type AddressesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AddressesCountOutputType
     */
    select?: AddressesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AddressesCountOutputType without action
   */
  export type AddressesCountOutputTypeCountOrders_orders_billing_address_idToaddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * AddressesCountOutputType without action
   */
  export type AddressesCountOutputTypeCountOrders_orders_shipping_address_idToaddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }


  /**
   * Count Type CartsCountOutputType
   */

  export type CartsCountOutputType = {
    cart_items: number
  }

  export type CartsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | CartsCountOutputTypeCountCart_itemsArgs
  }

  // Custom InputTypes
  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CartsCountOutputType
     */
    select?: CartsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CartsCountOutputType without action
   */
  export type CartsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }


  /**
   * Count Type CategoriesCountOutputType
   */

  export type CategoriesCountOutputType = {
    other_categories: number
    products: number
  }

  export type CategoriesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    other_categories?: boolean | CategoriesCountOutputTypeCountOther_categoriesArgs
    products?: boolean | CategoriesCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoriesCountOutputType
     */
    select?: CategoriesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountOther_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
  }

  /**
   * CategoriesCountOutputType without action
   */
  export type CategoriesCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
  }


  /**
   * Count Type OrdersCountOutputType
   */

  export type OrdersCountOutputType = {
    order_items: number
  }

  export type OrdersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | OrdersCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrdersCountOutputType
     */
    select?: OrdersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrdersCountOutputType without action
   */
  export type OrdersCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type Product_variantsCountOutputType
   */

  export type Product_variantsCountOutputType = {
    cart_items: number
    order_items: number
  }

  export type Product_variantsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | Product_variantsCountOutputTypeCountCart_itemsArgs
    order_items?: boolean | Product_variantsCountOutputTypeCountOrder_itemsArgs
  }

  // Custom InputTypes
  /**
   * Product_variantsCountOutputType without action
   */
  export type Product_variantsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product_variantsCountOutputType
     */
    select?: Product_variantsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * Product_variantsCountOutputType without action
   */
  export type Product_variantsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }

  /**
   * Product_variantsCountOutputType without action
   */
  export type Product_variantsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }


  /**
   * Count Type ProductsCountOutputType
   */

  export type ProductsCountOutputType = {
    cart_items: number
    order_items: number
    product_images: number
    product_reviews: number
    product_variants: number
  }

  export type ProductsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | ProductsCountOutputTypeCountCart_itemsArgs
    order_items?: boolean | ProductsCountOutputTypeCountOrder_itemsArgs
    product_images?: boolean | ProductsCountOutputTypeCountProduct_imagesArgs
    product_reviews?: boolean | ProductsCountOutputTypeCountProduct_reviewsArgs
    product_variants?: boolean | ProductsCountOutputTypeCountProduct_variantsArgs
  }

  // Custom InputTypes
  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductsCountOutputType
     */
    select?: ProductsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountCart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountOrder_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_reviewsWhereInput
  }

  /**
   * ProductsCountOutputType without action
   */
  export type ProductsCountOutputTypeCountProduct_variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_variantsWhereInput
  }


  /**
   * Count Type UsersCountOutputType
   */

  export type UsersCountOutputType = {
    addresses: number
    carts: number
    orders: number
    product_reviews: number
  }

  export type UsersCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | UsersCountOutputTypeCountAddressesArgs
    carts?: boolean | UsersCountOutputTypeCountCartsArgs
    orders?: boolean | UsersCountOutputTypeCountOrdersArgs
    product_reviews?: boolean | UsersCountOutputTypeCountProduct_reviewsArgs
  }

  // Custom InputTypes
  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UsersCountOutputType
     */
    select?: UsersCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountAddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountCartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountOrdersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
  }

  /**
   * UsersCountOutputType without action
   */
  export type UsersCountOutputTypeCountProduct_reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_reviewsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model addresses
   */

  export type AggregateAddresses = {
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  export type AddressesAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type AddressesMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postal_code: string | null
    is_default: boolean | null
    created_at: Date | null
  }

  export type AddressesMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    street: string | null
    city: string | null
    state: string | null
    country: string | null
    postal_code: string | null
    is_default: boolean | null
    created_at: Date | null
  }

  export type AddressesCountAggregateOutputType = {
    id: number
    user_id: number
    street: number
    city: number
    state: number
    country: number
    postal_code: number
    is_default: number
    created_at: number
    _all: number
  }


  export type AddressesAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type AddressesMinAggregateInputType = {
    id?: true
    user_id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postal_code?: true
    is_default?: true
    created_at?: true
  }

  export type AddressesMaxAggregateInputType = {
    id?: true
    user_id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postal_code?: true
    is_default?: true
    created_at?: true
  }

  export type AddressesCountAggregateInputType = {
    id?: true
    user_id?: true
    street?: true
    city?: true
    state?: true
    country?: true
    postal_code?: true
    is_default?: true
    created_at?: true
    _all?: true
  }

  export type AddressesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to aggregate.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned addresses
    **/
    _count?: true | AddressesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressesMaxAggregateInputType
  }

  export type GetAddressesAggregateType<T extends AddressesAggregateArgs> = {
        [P in keyof T & keyof AggregateAddresses]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddresses[P]>
      : GetScalarType<T[P], AggregateAddresses[P]>
  }




  export type addressesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithAggregationInput | addressesOrderByWithAggregationInput[]
    by: AddressesScalarFieldEnum[] | AddressesScalarFieldEnum
    having?: addressesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressesCountAggregateInputType | true
    _avg?: AddressesAvgAggregateInputType
    _sum?: AddressesSumAggregateInputType
    _min?: AddressesMinAggregateInputType
    _max?: AddressesMaxAggregateInputType
  }

  export type AddressesGroupByOutputType = {
    id: number
    user_id: number | null
    street: string
    city: string
    state: string | null
    country: string
    postal_code: string
    is_default: boolean | null
    created_at: Date | null
    _count: AddressesCountAggregateOutputType | null
    _avg: AddressesAvgAggregateOutputType | null
    _sum: AddressesSumAggregateOutputType | null
    _min: AddressesMinAggregateOutputType | null
    _max: AddressesMaxAggregateOutputType | null
  }

  type GetAddressesGroupByPayload<T extends addressesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressesGroupByOutputType[P]>
            : GetScalarType<T[P], AddressesGroupByOutputType[P]>
        }
      >
    >


  export type addressesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    is_default?: boolean
    created_at?: boolean
    users?: boolean | addresses$usersArgs<ExtArgs>
    orders_orders_billing_address_idToaddresses?: boolean | addresses$orders_orders_billing_address_idToaddressesArgs<ExtArgs>
    orders_orders_shipping_address_idToaddresses?: boolean | addresses$orders_orders_shipping_address_idToaddressesArgs<ExtArgs>
    _count?: boolean | AddressesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    is_default?: boolean
    created_at?: boolean
    users?: boolean | addresses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    is_default?: boolean
    created_at?: boolean
    users?: boolean | addresses$usersArgs<ExtArgs>
  }, ExtArgs["result"]["addresses"]>

  export type addressesSelectScalar = {
    id?: boolean
    user_id?: boolean
    street?: boolean
    city?: boolean
    state?: boolean
    country?: boolean
    postal_code?: boolean
    is_default?: boolean
    created_at?: boolean
  }

  export type addressesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "street" | "city" | "state" | "country" | "postal_code" | "is_default" | "created_at", ExtArgs["result"]["addresses"]>
  export type addressesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | addresses$usersArgs<ExtArgs>
    orders_orders_billing_address_idToaddresses?: boolean | addresses$orders_orders_billing_address_idToaddressesArgs<ExtArgs>
    orders_orders_shipping_address_idToaddresses?: boolean | addresses$orders_orders_shipping_address_idToaddressesArgs<ExtArgs>
    _count?: boolean | AddressesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type addressesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | addresses$usersArgs<ExtArgs>
  }
  export type addressesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | addresses$usersArgs<ExtArgs>
  }

  export type $addressesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "addresses"
    objects: {
      users: Prisma.$usersPayload<ExtArgs> | null
      orders_orders_billing_address_idToaddresses: Prisma.$ordersPayload<ExtArgs>[]
      orders_orders_shipping_address_idToaddresses: Prisma.$ordersPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      street: string
      city: string
      state: string | null
      country: string
      postal_code: string
      is_default: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["addresses"]>
    composites: {}
  }

  type addressesGetPayload<S extends boolean | null | undefined | addressesDefaultArgs> = $Result.GetResult<Prisma.$addressesPayload, S>

  type addressesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<addressesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressesCountAggregateInputType | true
    }

  export interface addressesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['addresses'], meta: { name: 'addresses' } }
    /**
     * Find zero or one Addresses that matches the filter.
     * @param {addressesFindUniqueArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends addressesFindUniqueArgs>(args: SelectSubset<T, addressesFindUniqueArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Addresses that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {addressesFindUniqueOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends addressesFindUniqueOrThrowArgs>(args: SelectSubset<T, addressesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends addressesFindFirstArgs>(args?: SelectSubset<T, addressesFindFirstArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Addresses that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindFirstOrThrowArgs} args - Arguments to find a Addresses
     * @example
     * // Get one Addresses
     * const addresses = await prisma.addresses.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends addressesFindFirstOrThrowArgs>(args?: SelectSubset<T, addressesFindFirstOrThrowArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.addresses.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.addresses.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressesWithIdOnly = await prisma.addresses.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends addressesFindManyArgs>(args?: SelectSubset<T, addressesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Addresses.
     * @param {addressesCreateArgs} args - Arguments to create a Addresses.
     * @example
     * // Create one Addresses
     * const Addresses = await prisma.addresses.create({
     *   data: {
     *     // ... data to create a Addresses
     *   }
     * })
     * 
     */
    create<T extends addressesCreateArgs>(args: SelectSubset<T, addressesCreateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {addressesCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends addressesCreateManyArgs>(args?: SelectSubset<T, addressesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {addressesCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const addresses = await prisma.addresses.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends addressesCreateManyAndReturnArgs>(args?: SelectSubset<T, addressesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Addresses.
     * @param {addressesDeleteArgs} args - Arguments to delete one Addresses.
     * @example
     * // Delete one Addresses
     * const Addresses = await prisma.addresses.delete({
     *   where: {
     *     // ... filter to delete one Addresses
     *   }
     * })
     * 
     */
    delete<T extends addressesDeleteArgs>(args: SelectSubset<T, addressesDeleteArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Addresses.
     * @param {addressesUpdateArgs} args - Arguments to update one Addresses.
     * @example
     * // Update one Addresses
     * const addresses = await prisma.addresses.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends addressesUpdateArgs>(args: SelectSubset<T, addressesUpdateArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {addressesDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.addresses.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends addressesDeleteManyArgs>(args?: SelectSubset<T, addressesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends addressesUpdateManyArgs>(args: SelectSubset<T, addressesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {addressesUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const addresses = await prisma.addresses.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressesWithIdOnly = await prisma.addresses.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends addressesUpdateManyAndReturnArgs>(args: SelectSubset<T, addressesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Addresses.
     * @param {addressesUpsertArgs} args - Arguments to update or create a Addresses.
     * @example
     * // Update or create a Addresses
     * const addresses = await prisma.addresses.upsert({
     *   create: {
     *     // ... data to create a Addresses
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Addresses we want to update
     *   }
     * })
     */
    upsert<T extends addressesUpsertArgs>(args: SelectSubset<T, addressesUpsertArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.addresses.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends addressesCountArgs>(
      args?: Subset<T, addressesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AddressesAggregateArgs>(args: Subset<T, AddressesAggregateArgs>): Prisma.PrismaPromise<GetAddressesAggregateType<T>>

    /**
     * Group by Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {addressesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends addressesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: addressesGroupByArgs['orderBy'] }
        : { orderBy?: addressesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, addressesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the addresses model
   */
  readonly fields: addressesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for addresses.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__addressesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends addresses$usersArgs<ExtArgs> = {}>(args?: Subset<T, addresses$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    orders_orders_billing_address_idToaddresses<T extends addresses$orders_orders_billing_address_idToaddressesArgs<ExtArgs> = {}>(args?: Subset<T, addresses$orders_orders_billing_address_idToaddressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders_orders_shipping_address_idToaddresses<T extends addresses$orders_orders_shipping_address_idToaddressesArgs<ExtArgs> = {}>(args?: Subset<T, addresses$orders_orders_shipping_address_idToaddressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the addresses model
   */
  interface addressesFieldRefs {
    readonly id: FieldRef<"addresses", 'Int'>
    readonly user_id: FieldRef<"addresses", 'Int'>
    readonly street: FieldRef<"addresses", 'String'>
    readonly city: FieldRef<"addresses", 'String'>
    readonly state: FieldRef<"addresses", 'String'>
    readonly country: FieldRef<"addresses", 'String'>
    readonly postal_code: FieldRef<"addresses", 'String'>
    readonly is_default: FieldRef<"addresses", 'Boolean'>
    readonly created_at: FieldRef<"addresses", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * addresses findUnique
   */
  export type addressesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findUniqueOrThrow
   */
  export type addressesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses findFirst
   */
  export type addressesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findFirstOrThrow
   */
  export type addressesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of addresses.
     */
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses findMany
   */
  export type addressesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter, which addresses to fetch.
     */
    where?: addressesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of addresses to fetch.
     */
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing addresses.
     */
    cursor?: addressesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` addresses.
     */
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * addresses create
   */
  export type addressesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to create a addresses.
     */
    data: XOR<addressesCreateInput, addressesUncheckedCreateInput>
  }

  /**
   * addresses createMany
   */
  export type addressesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * addresses createManyAndReturn
   */
  export type addressesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to create many addresses.
     */
    data: addressesCreateManyInput | addressesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses update
   */
  export type addressesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The data needed to update a addresses.
     */
    data: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
    /**
     * Choose, which addresses to update.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses updateMany
   */
  export type addressesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
  }

  /**
   * addresses updateManyAndReturn
   */
  export type addressesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * The data used to update addresses.
     */
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyInput>
    /**
     * Filter which addresses to update
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * addresses upsert
   */
  export type addressesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * The filter to search for the addresses to update in case it exists.
     */
    where: addressesWhereUniqueInput
    /**
     * In case the addresses found by the `where` argument doesn't exist, create a new addresses with this data.
     */
    create: XOR<addressesCreateInput, addressesUncheckedCreateInput>
    /**
     * In case the addresses was found with the provided `where` argument, update it with this data.
     */
    update: XOR<addressesUpdateInput, addressesUncheckedUpdateInput>
  }

  /**
   * addresses delete
   */
  export type addressesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    /**
     * Filter which addresses to delete.
     */
    where: addressesWhereUniqueInput
  }

  /**
   * addresses deleteMany
   */
  export type addressesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which addresses to delete
     */
    where?: addressesWhereInput
    /**
     * Limit how many addresses to delete.
     */
    limit?: number
  }

  /**
   * addresses.users
   */
  export type addresses$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * addresses.orders_orders_billing_address_idToaddresses
   */
  export type addresses$orders_orders_billing_address_idToaddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * addresses.orders_orders_shipping_address_idToaddresses
   */
  export type addresses$orders_orders_shipping_address_idToaddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * addresses without action
   */
  export type addressesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
  }


  /**
   * Model cart_items
   */

  export type AggregateCart_items = {
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  export type Cart_itemsAvgAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    variant_id: number | null
    quantity: number | null
  }

  export type Cart_itemsSumAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    variant_id: number | null
    quantity: number | null
  }

  export type Cart_itemsMinAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    variant_id: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Cart_itemsMaxAggregateOutputType = {
    id: number | null
    cart_id: number | null
    product_id: number | null
    variant_id: number | null
    quantity: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type Cart_itemsCountAggregateOutputType = {
    id: number
    cart_id: number
    product_id: number
    variant_id: number
    quantity: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type Cart_itemsAvgAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    variant_id?: true
    quantity?: true
  }

  export type Cart_itemsSumAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    variant_id?: true
    quantity?: true
  }

  export type Cart_itemsMinAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    variant_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type Cart_itemsMaxAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    variant_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
  }

  export type Cart_itemsCountAggregateInputType = {
    id?: true
    cart_id?: true
    product_id?: true
    variant_id?: true
    quantity?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type Cart_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to aggregate.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned cart_items
    **/
    _count?: true | Cart_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Cart_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Cart_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Cart_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type GetCart_itemsAggregateType<T extends Cart_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateCart_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCart_items[P]>
      : GetScalarType<T[P], AggregateCart_items[P]>
  }




  export type cart_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithAggregationInput | cart_itemsOrderByWithAggregationInput[]
    by: Cart_itemsScalarFieldEnum[] | Cart_itemsScalarFieldEnum
    having?: cart_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Cart_itemsCountAggregateInputType | true
    _avg?: Cart_itemsAvgAggregateInputType
    _sum?: Cart_itemsSumAggregateInputType
    _min?: Cart_itemsMinAggregateInputType
    _max?: Cart_itemsMaxAggregateInputType
  }

  export type Cart_itemsGroupByOutputType = {
    id: number
    cart_id: number | null
    product_id: number | null
    variant_id: number | null
    quantity: number
    created_at: Date | null
    updated_at: Date | null
    _count: Cart_itemsCountAggregateOutputType | null
    _avg: Cart_itemsAvgAggregateOutputType | null
    _sum: Cart_itemsSumAggregateOutputType | null
    _min: Cart_itemsMinAggregateOutputType | null
    _max: Cart_itemsMaxAggregateOutputType | null
  }

  type GetCart_itemsGroupByPayload<T extends cart_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Cart_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Cart_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Cart_itemsGroupByOutputType[P]>
        }
      >
    >


  export type cart_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
    product_variants?: boolean | cart_items$product_variantsArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
    product_variants?: boolean | cart_items$product_variantsArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
    product_variants?: boolean | cart_items$product_variantsArgs<ExtArgs>
  }, ExtArgs["result"]["cart_items"]>

  export type cart_itemsSelectScalar = {
    id?: boolean
    cart_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    quantity?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cart_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "cart_id" | "product_id" | "variant_id" | "quantity" | "created_at" | "updated_at", ExtArgs["result"]["cart_items"]>
  export type cart_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
    product_variants?: boolean | cart_items$product_variantsArgs<ExtArgs>
  }
  export type cart_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
    product_variants?: boolean | cart_items$product_variantsArgs<ExtArgs>
  }
  export type cart_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    carts?: boolean | cart_items$cartsArgs<ExtArgs>
    products?: boolean | cart_items$productsArgs<ExtArgs>
    product_variants?: boolean | cart_items$product_variantsArgs<ExtArgs>
  }

  export type $cart_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "cart_items"
    objects: {
      carts: Prisma.$cartsPayload<ExtArgs> | null
      products: Prisma.$productsPayload<ExtArgs> | null
      product_variants: Prisma.$product_variantsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      cart_id: number | null
      product_id: number | null
      variant_id: number | null
      quantity: number
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["cart_items"]>
    composites: {}
  }

  type cart_itemsGetPayload<S extends boolean | null | undefined | cart_itemsDefaultArgs> = $Result.GetResult<Prisma.$cart_itemsPayload, S>

  type cart_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cart_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Cart_itemsCountAggregateInputType | true
    }

  export interface cart_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['cart_items'], meta: { name: 'cart_items' } }
    /**
     * Find zero or one Cart_items that matches the filter.
     * @param {cart_itemsFindUniqueArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cart_itemsFindUniqueArgs>(args: SelectSubset<T, cart_itemsFindUniqueArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Cart_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cart_itemsFindUniqueOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cart_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, cart_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cart_itemsFindFirstArgs>(args?: SelectSubset<T, cart_itemsFindFirstArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Cart_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindFirstOrThrowArgs} args - Arguments to find a Cart_items
     * @example
     * // Get one Cart_items
     * const cart_items = await prisma.cart_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cart_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, cart_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Cart_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Cart_items
     * const cart_items = await prisma.cart_items.findMany()
     * 
     * // Get first 10 Cart_items
     * const cart_items = await prisma.cart_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cart_itemsFindManyArgs>(args?: SelectSubset<T, cart_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Cart_items.
     * @param {cart_itemsCreateArgs} args - Arguments to create a Cart_items.
     * @example
     * // Create one Cart_items
     * const Cart_items = await prisma.cart_items.create({
     *   data: {
     *     // ... data to create a Cart_items
     *   }
     * })
     * 
     */
    create<T extends cart_itemsCreateArgs>(args: SelectSubset<T, cart_itemsCreateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Cart_items.
     * @param {cart_itemsCreateManyArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cart_itemsCreateManyArgs>(args?: SelectSubset<T, cart_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Cart_items and returns the data saved in the database.
     * @param {cart_itemsCreateManyAndReturnArgs} args - Arguments to create many Cart_items.
     * @example
     * // Create many Cart_items
     * const cart_items = await prisma.cart_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Cart_items and only return the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cart_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, cart_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Cart_items.
     * @param {cart_itemsDeleteArgs} args - Arguments to delete one Cart_items.
     * @example
     * // Delete one Cart_items
     * const Cart_items = await prisma.cart_items.delete({
     *   where: {
     *     // ... filter to delete one Cart_items
     *   }
     * })
     * 
     */
    delete<T extends cart_itemsDeleteArgs>(args: SelectSubset<T, cart_itemsDeleteArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Cart_items.
     * @param {cart_itemsUpdateArgs} args - Arguments to update one Cart_items.
     * @example
     * // Update one Cart_items
     * const cart_items = await prisma.cart_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cart_itemsUpdateArgs>(args: SelectSubset<T, cart_itemsUpdateArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Cart_items.
     * @param {cart_itemsDeleteManyArgs} args - Arguments to filter Cart_items to delete.
     * @example
     * // Delete a few Cart_items
     * const { count } = await prisma.cart_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cart_itemsDeleteManyArgs>(args?: SelectSubset<T, cart_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cart_itemsUpdateManyArgs>(args: SelectSubset<T, cart_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Cart_items and returns the data updated in the database.
     * @param {cart_itemsUpdateManyAndReturnArgs} args - Arguments to update many Cart_items.
     * @example
     * // Update many Cart_items
     * const cart_items = await prisma.cart_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Cart_items and only return the `id`
     * const cart_itemsWithIdOnly = await prisma.cart_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cart_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, cart_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Cart_items.
     * @param {cart_itemsUpsertArgs} args - Arguments to update or create a Cart_items.
     * @example
     * // Update or create a Cart_items
     * const cart_items = await prisma.cart_items.upsert({
     *   create: {
     *     // ... data to create a Cart_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Cart_items we want to update
     *   }
     * })
     */
    upsert<T extends cart_itemsUpsertArgs>(args: SelectSubset<T, cart_itemsUpsertArgs<ExtArgs>>): Prisma__cart_itemsClient<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsCountArgs} args - Arguments to filter Cart_items to count.
     * @example
     * // Count the number of Cart_items
     * const count = await prisma.cart_items.count({
     *   where: {
     *     // ... the filter for the Cart_items we want to count
     *   }
     * })
    **/
    count<T extends cart_itemsCountArgs>(
      args?: Subset<T, cart_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Cart_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Cart_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Cart_itemsAggregateArgs>(args: Subset<T, Cart_itemsAggregateArgs>): Prisma.PrismaPromise<GetCart_itemsAggregateType<T>>

    /**
     * Group by Cart_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cart_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cart_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cart_itemsGroupByArgs['orderBy'] }
        : { orderBy?: cart_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cart_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCart_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the cart_items model
   */
  readonly fields: cart_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for cart_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cart_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    carts<T extends cart_items$cartsArgs<ExtArgs> = {}>(args?: Subset<T, cart_items$cartsArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends cart_items$productsArgs<ExtArgs> = {}>(args?: Subset<T, cart_items$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product_variants<T extends cart_items$product_variantsArgs<ExtArgs> = {}>(args?: Subset<T, cart_items$product_variantsArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the cart_items model
   */
  interface cart_itemsFieldRefs {
    readonly id: FieldRef<"cart_items", 'Int'>
    readonly cart_id: FieldRef<"cart_items", 'Int'>
    readonly product_id: FieldRef<"cart_items", 'Int'>
    readonly variant_id: FieldRef<"cart_items", 'Int'>
    readonly quantity: FieldRef<"cart_items", 'Int'>
    readonly created_at: FieldRef<"cart_items", 'DateTime'>
    readonly updated_at: FieldRef<"cart_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * cart_items findUnique
   */
  export type cart_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findUniqueOrThrow
   */
  export type cart_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items findFirst
   */
  export type cart_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findFirstOrThrow
   */
  export type cart_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of cart_items.
     */
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items findMany
   */
  export type cart_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter, which cart_items to fetch.
     */
    where?: cart_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of cart_items to fetch.
     */
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing cart_items.
     */
    cursor?: cart_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` cart_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` cart_items.
     */
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * cart_items create
   */
  export type cart_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a cart_items.
     */
    data?: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
  }

  /**
   * cart_items createMany
   */
  export type cart_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * cart_items createManyAndReturn
   */
  export type cart_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many cart_items.
     */
    data: cart_itemsCreateManyInput | cart_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items update
   */
  export type cart_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a cart_items.
     */
    data: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
    /**
     * Choose, which cart_items to update.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items updateMany
   */
  export type cart_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
  }

  /**
   * cart_items updateManyAndReturn
   */
  export type cart_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * The data used to update cart_items.
     */
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyInput>
    /**
     * Filter which cart_items to update
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * cart_items upsert
   */
  export type cart_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the cart_items to update in case it exists.
     */
    where: cart_itemsWhereUniqueInput
    /**
     * In case the cart_items found by the `where` argument doesn't exist, create a new cart_items with this data.
     */
    create: XOR<cart_itemsCreateInput, cart_itemsUncheckedCreateInput>
    /**
     * In case the cart_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cart_itemsUpdateInput, cart_itemsUncheckedUpdateInput>
  }

  /**
   * cart_items delete
   */
  export type cart_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    /**
     * Filter which cart_items to delete.
     */
    where: cart_itemsWhereUniqueInput
  }

  /**
   * cart_items deleteMany
   */
  export type cart_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which cart_items to delete
     */
    where?: cart_itemsWhereInput
    /**
     * Limit how many cart_items to delete.
     */
    limit?: number
  }

  /**
   * cart_items.carts
   */
  export type cart_items$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
  }

  /**
   * cart_items.products
   */
  export type cart_items$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * cart_items.product_variants
   */
  export type cart_items$product_variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    where?: product_variantsWhereInput
  }

  /**
   * cart_items without action
   */
  export type cart_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
  }


  /**
   * Model carts
   */

  export type AggregateCarts = {
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  export type CartsAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsSumAggregateOutputType = {
    id: number | null
    user_id: number | null
  }

  export type CartsMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type CartsCountAggregateOutputType = {
    id: number
    user_id: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type CartsAvgAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsSumAggregateInputType = {
    id?: true
    user_id?: true
  }

  export type CartsMinAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsMaxAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
  }

  export type CartsCountAggregateInputType = {
    id?: true
    user_id?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type CartsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to aggregate.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned carts
    **/
    _count?: true | CartsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CartsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CartsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CartsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CartsMaxAggregateInputType
  }

  export type GetCartsAggregateType<T extends CartsAggregateArgs> = {
        [P in keyof T & keyof AggregateCarts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarts[P]>
      : GetScalarType<T[P], AggregateCarts[P]>
  }




  export type cartsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithAggregationInput | cartsOrderByWithAggregationInput[]
    by: CartsScalarFieldEnum[] | CartsScalarFieldEnum
    having?: cartsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CartsCountAggregateInputType | true
    _avg?: CartsAvgAggregateInputType
    _sum?: CartsSumAggregateInputType
    _min?: CartsMinAggregateInputType
    _max?: CartsMaxAggregateInputType
  }

  export type CartsGroupByOutputType = {
    id: number
    user_id: number | null
    created_at: Date | null
    updated_at: Date | null
    _count: CartsCountAggregateOutputType | null
    _avg: CartsAvgAggregateOutputType | null
    _sum: CartsSumAggregateOutputType | null
    _min: CartsMinAggregateOutputType | null
    _max: CartsMaxAggregateOutputType | null
  }

  type GetCartsGroupByPayload<T extends cartsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CartsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CartsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CartsGroupByOutputType[P]>
            : GetScalarType<T[P], CartsGroupByOutputType[P]>
        }
      >
    >


  export type cartsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    users?: boolean | carts$usersArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | carts$usersArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
    users?: boolean | carts$usersArgs<ExtArgs>
  }, ExtArgs["result"]["carts"]>

  export type cartsSelectScalar = {
    id?: boolean
    user_id?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type cartsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "created_at" | "updated_at", ExtArgs["result"]["carts"]>
  export type cartsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | carts$cart_itemsArgs<ExtArgs>
    users?: boolean | carts$usersArgs<ExtArgs>
    _count?: boolean | CartsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type cartsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | carts$usersArgs<ExtArgs>
  }
  export type cartsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | carts$usersArgs<ExtArgs>
  }

  export type $cartsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "carts"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["carts"]>
    composites: {}
  }

  type cartsGetPayload<S extends boolean | null | undefined | cartsDefaultArgs> = $Result.GetResult<Prisma.$cartsPayload, S>

  type cartsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<cartsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CartsCountAggregateInputType | true
    }

  export interface cartsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['carts'], meta: { name: 'carts' } }
    /**
     * Find zero or one Carts that matches the filter.
     * @param {cartsFindUniqueArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends cartsFindUniqueArgs>(args: SelectSubset<T, cartsFindUniqueArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {cartsFindUniqueOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends cartsFindUniqueOrThrowArgs>(args: SelectSubset<T, cartsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends cartsFindFirstArgs>(args?: SelectSubset<T, cartsFindFirstArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindFirstOrThrowArgs} args - Arguments to find a Carts
     * @example
     * // Get one Carts
     * const carts = await prisma.carts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends cartsFindFirstOrThrowArgs>(args?: SelectSubset<T, cartsFindFirstOrThrowArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carts
     * const carts = await prisma.carts.findMany()
     * 
     * // Get first 10 Carts
     * const carts = await prisma.carts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const cartsWithIdOnly = await prisma.carts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends cartsFindManyArgs>(args?: SelectSubset<T, cartsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carts.
     * @param {cartsCreateArgs} args - Arguments to create a Carts.
     * @example
     * // Create one Carts
     * const Carts = await prisma.carts.create({
     *   data: {
     *     // ... data to create a Carts
     *   }
     * })
     * 
     */
    create<T extends cartsCreateArgs>(args: SelectSubset<T, cartsCreateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carts.
     * @param {cartsCreateManyArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends cartsCreateManyArgs>(args?: SelectSubset<T, cartsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carts and returns the data saved in the database.
     * @param {cartsCreateManyAndReturnArgs} args - Arguments to create many Carts.
     * @example
     * // Create many Carts
     * const carts = await prisma.carts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends cartsCreateManyAndReturnArgs>(args?: SelectSubset<T, cartsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carts.
     * @param {cartsDeleteArgs} args - Arguments to delete one Carts.
     * @example
     * // Delete one Carts
     * const Carts = await prisma.carts.delete({
     *   where: {
     *     // ... filter to delete one Carts
     *   }
     * })
     * 
     */
    delete<T extends cartsDeleteArgs>(args: SelectSubset<T, cartsDeleteArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carts.
     * @param {cartsUpdateArgs} args - Arguments to update one Carts.
     * @example
     * // Update one Carts
     * const carts = await prisma.carts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends cartsUpdateArgs>(args: SelectSubset<T, cartsUpdateArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carts.
     * @param {cartsDeleteManyArgs} args - Arguments to filter Carts to delete.
     * @example
     * // Delete a few Carts
     * const { count } = await prisma.carts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends cartsDeleteManyArgs>(args?: SelectSubset<T, cartsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends cartsUpdateManyArgs>(args: SelectSubset<T, cartsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carts and returns the data updated in the database.
     * @param {cartsUpdateManyAndReturnArgs} args - Arguments to update many Carts.
     * @example
     * // Update many Carts
     * const carts = await prisma.carts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carts and only return the `id`
     * const cartsWithIdOnly = await prisma.carts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends cartsUpdateManyAndReturnArgs>(args: SelectSubset<T, cartsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carts.
     * @param {cartsUpsertArgs} args - Arguments to update or create a Carts.
     * @example
     * // Update or create a Carts
     * const carts = await prisma.carts.upsert({
     *   create: {
     *     // ... data to create a Carts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carts we want to update
     *   }
     * })
     */
    upsert<T extends cartsUpsertArgs>(args: SelectSubset<T, cartsUpsertArgs<ExtArgs>>): Prisma__cartsClient<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsCountArgs} args - Arguments to filter Carts to count.
     * @example
     * // Count the number of Carts
     * const count = await prisma.carts.count({
     *   where: {
     *     // ... the filter for the Carts we want to count
     *   }
     * })
    **/
    count<T extends cartsCountArgs>(
      args?: Subset<T, cartsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CartsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CartsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CartsAggregateArgs>(args: Subset<T, CartsAggregateArgs>): Prisma.PrismaPromise<GetCartsAggregateType<T>>

    /**
     * Group by Carts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {cartsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends cartsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: cartsGroupByArgs['orderBy'] }
        : { orderBy?: cartsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, cartsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCartsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the carts model
   */
  readonly fields: cartsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for carts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__cartsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends carts$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, carts$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    users<T extends carts$usersArgs<ExtArgs> = {}>(args?: Subset<T, carts$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the carts model
   */
  interface cartsFieldRefs {
    readonly id: FieldRef<"carts", 'Int'>
    readonly user_id: FieldRef<"carts", 'Int'>
    readonly created_at: FieldRef<"carts", 'DateTime'>
    readonly updated_at: FieldRef<"carts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * carts findUnique
   */
  export type cartsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findUniqueOrThrow
   */
  export type cartsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts findFirst
   */
  export type cartsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findFirstOrThrow
   */
  export type cartsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of carts.
     */
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts findMany
   */
  export type cartsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter, which carts to fetch.
     */
    where?: cartsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of carts to fetch.
     */
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing carts.
     */
    cursor?: cartsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` carts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` carts.
     */
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * carts create
   */
  export type cartsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to create a carts.
     */
    data?: XOR<cartsCreateInput, cartsUncheckedCreateInput>
  }

  /**
   * carts createMany
   */
  export type cartsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * carts createManyAndReturn
   */
  export type cartsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to create many carts.
     */
    data: cartsCreateManyInput | cartsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts update
   */
  export type cartsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The data needed to update a carts.
     */
    data: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
    /**
     * Choose, which carts to update.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts updateMany
   */
  export type cartsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
  }

  /**
   * carts updateManyAndReturn
   */
  export type cartsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * The data used to update carts.
     */
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyInput>
    /**
     * Filter which carts to update
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * carts upsert
   */
  export type cartsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * The filter to search for the carts to update in case it exists.
     */
    where: cartsWhereUniqueInput
    /**
     * In case the carts found by the `where` argument doesn't exist, create a new carts with this data.
     */
    create: XOR<cartsCreateInput, cartsUncheckedCreateInput>
    /**
     * In case the carts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<cartsUpdateInput, cartsUncheckedUpdateInput>
  }

  /**
   * carts delete
   */
  export type cartsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    /**
     * Filter which carts to delete.
     */
    where: cartsWhereUniqueInput
  }

  /**
   * carts deleteMany
   */
  export type cartsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which carts to delete
     */
    where?: cartsWhereInput
    /**
     * Limit how many carts to delete.
     */
    limit?: number
  }

  /**
   * carts.cart_items
   */
  export type carts$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * carts.users
   */
  export type carts$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * carts without action
   */
  export type cartsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
  }


  /**
   * Model categories
   */

  export type AggregateCategories = {
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  export type CategoriesAvgAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type CategoriesSumAggregateOutputType = {
    id: number | null
    parent_id: number | null
  }

  export type CategoriesMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    parent_id: number | null
    created_at: Date | null
  }

  export type CategoriesMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    parent_id: number | null
    created_at: Date | null
  }

  export type CategoriesCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    parent_id: number
    created_at: number
    _all: number
  }


  export type CategoriesAvgAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type CategoriesSumAggregateInputType = {
    id?: true
    parent_id?: true
  }

  export type CategoriesMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    parent_id?: true
    created_at?: true
  }

  export type CategoriesMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    parent_id?: true
    created_at?: true
  }

  export type CategoriesCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    parent_id?: true
    created_at?: true
    _all?: true
  }

  export type CategoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to aggregate.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned categories
    **/
    _count?: true | CategoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoriesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategoriesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoriesMaxAggregateInputType
  }

  export type GetCategoriesAggregateType<T extends CategoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateCategories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategories[P]>
      : GetScalarType<T[P], AggregateCategories[P]>
  }




  export type categoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithAggregationInput | categoriesOrderByWithAggregationInput[]
    by: CategoriesScalarFieldEnum[] | CategoriesScalarFieldEnum
    having?: categoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoriesCountAggregateInputType | true
    _avg?: CategoriesAvgAggregateInputType
    _sum?: CategoriesSumAggregateInputType
    _min?: CategoriesMinAggregateInputType
    _max?: CategoriesMaxAggregateInputType
  }

  export type CategoriesGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    parent_id: number | null
    created_at: Date | null
    _count: CategoriesCountAggregateOutputType | null
    _avg: CategoriesAvgAggregateOutputType | null
    _sum: CategoriesSumAggregateOutputType | null
    _min: CategoriesMinAggregateOutputType | null
    _max: CategoriesMaxAggregateOutputType | null
  }

  type GetCategoriesGroupByPayload<T extends categoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
            : GetScalarType<T[P], CategoriesGroupByOutputType[P]>
        }
      >
    >


  export type categoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    parent_id?: boolean
    created_at?: boolean
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    parent_id?: boolean
    created_at?: boolean
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    parent_id?: boolean
    created_at?: boolean
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["categories"]>

  export type categoriesSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    parent_id?: boolean
    created_at?: boolean
  }

  export type categoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "parent_id" | "created_at", ExtArgs["result"]["categories"]>
  export type categoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>
    other_categories?: boolean | categories$other_categoriesArgs<ExtArgs>
    products?: boolean | categories$productsArgs<ExtArgs>
    _count?: boolean | CategoriesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type categoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }
  export type categoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | categories$categoriesArgs<ExtArgs>
  }

  export type $categoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "categories"
    objects: {
      categories: Prisma.$categoriesPayload<ExtArgs> | null
      other_categories: Prisma.$categoriesPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      parent_id: number | null
      created_at: Date | null
    }, ExtArgs["result"]["categories"]>
    composites: {}
  }

  type categoriesGetPayload<S extends boolean | null | undefined | categoriesDefaultArgs> = $Result.GetResult<Prisma.$categoriesPayload, S>

  type categoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<categoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoriesCountAggregateInputType | true
    }

  export interface categoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['categories'], meta: { name: 'categories' } }
    /**
     * Find zero or one Categories that matches the filter.
     * @param {categoriesFindUniqueArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends categoriesFindUniqueArgs>(args: SelectSubset<T, categoriesFindUniqueArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Categories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {categoriesFindUniqueOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends categoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, categoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends categoriesFindFirstArgs>(args?: SelectSubset<T, categoriesFindFirstArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Categories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindFirstOrThrowArgs} args - Arguments to find a Categories
     * @example
     * // Get one Categories
     * const categories = await prisma.categories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends categoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, categoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.categories.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.categories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoriesWithIdOnly = await prisma.categories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends categoriesFindManyArgs>(args?: SelectSubset<T, categoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Categories.
     * @param {categoriesCreateArgs} args - Arguments to create a Categories.
     * @example
     * // Create one Categories
     * const Categories = await prisma.categories.create({
     *   data: {
     *     // ... data to create a Categories
     *   }
     * })
     * 
     */
    create<T extends categoriesCreateArgs>(args: SelectSubset<T, categoriesCreateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {categoriesCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends categoriesCreateManyArgs>(args?: SelectSubset<T, categoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {categoriesCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const categories = await prisma.categories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends categoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, categoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Categories.
     * @param {categoriesDeleteArgs} args - Arguments to delete one Categories.
     * @example
     * // Delete one Categories
     * const Categories = await prisma.categories.delete({
     *   where: {
     *     // ... filter to delete one Categories
     *   }
     * })
     * 
     */
    delete<T extends categoriesDeleteArgs>(args: SelectSubset<T, categoriesDeleteArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Categories.
     * @param {categoriesUpdateArgs} args - Arguments to update one Categories.
     * @example
     * // Update one Categories
     * const categories = await prisma.categories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends categoriesUpdateArgs>(args: SelectSubset<T, categoriesUpdateArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {categoriesDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.categories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends categoriesDeleteManyArgs>(args?: SelectSubset<T, categoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends categoriesUpdateManyArgs>(args: SelectSubset<T, categoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {categoriesUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const categories = await prisma.categories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoriesWithIdOnly = await prisma.categories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends categoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, categoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Categories.
     * @param {categoriesUpsertArgs} args - Arguments to update or create a Categories.
     * @example
     * // Update or create a Categories
     * const categories = await prisma.categories.upsert({
     *   create: {
     *     // ... data to create a Categories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Categories we want to update
     *   }
     * })
     */
    upsert<T extends categoriesUpsertArgs>(args: SelectSubset<T, categoriesUpsertArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.categories.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends categoriesCountArgs>(
      args?: Subset<T, categoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoriesAggregateArgs>(args: Subset<T, CategoriesAggregateArgs>): Prisma.PrismaPromise<GetCategoriesAggregateType<T>>

    /**
     * Group by Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {categoriesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends categoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: categoriesGroupByArgs['orderBy'] }
        : { orderBy?: categoriesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, categoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the categories model
   */
  readonly fields: categoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for categories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__categoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    categories<T extends categories$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    other_categories<T extends categories$other_categoriesArgs<ExtArgs> = {}>(args?: Subset<T, categories$other_categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends categories$productsArgs<ExtArgs> = {}>(args?: Subset<T, categories$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the categories model
   */
  interface categoriesFieldRefs {
    readonly id: FieldRef<"categories", 'Int'>
    readonly name: FieldRef<"categories", 'String'>
    readonly slug: FieldRef<"categories", 'String'>
    readonly description: FieldRef<"categories", 'String'>
    readonly parent_id: FieldRef<"categories", 'Int'>
    readonly created_at: FieldRef<"categories", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * categories findUnique
   */
  export type categoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findUniqueOrThrow
   */
  export type categoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories findFirst
   */
  export type categoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findFirstOrThrow
   */
  export type categoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of categories.
     */
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories findMany
   */
  export type categoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter, which categories to fetch.
     */
    where?: categoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of categories to fetch.
     */
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing categories.
     */
    cursor?: categoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` categories.
     */
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories create
   */
  export type categoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a categories.
     */
    data: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
  }

  /**
   * categories createMany
   */
  export type categoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * categories createManyAndReturn
   */
  export type categoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to create many categories.
     */
    data: categoriesCreateManyInput | categoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories update
   */
  export type categoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a categories.
     */
    data: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
    /**
     * Choose, which categories to update.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories updateMany
   */
  export type categoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
  }

  /**
   * categories updateManyAndReturn
   */
  export type categoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * The data used to update categories.
     */
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyInput>
    /**
     * Filter which categories to update
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * categories upsert
   */
  export type categoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the categories to update in case it exists.
     */
    where: categoriesWhereUniqueInput
    /**
     * In case the categories found by the `where` argument doesn't exist, create a new categories with this data.
     */
    create: XOR<categoriesCreateInput, categoriesUncheckedCreateInput>
    /**
     * In case the categories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<categoriesUpdateInput, categoriesUncheckedUpdateInput>
  }

  /**
   * categories delete
   */
  export type categoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    /**
     * Filter which categories to delete.
     */
    where: categoriesWhereUniqueInput
  }

  /**
   * categories deleteMany
   */
  export type categoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which categories to delete
     */
    where?: categoriesWhereInput
    /**
     * Limit how many categories to delete.
     */
    limit?: number
  }

  /**
   * categories.categories
   */
  export type categories$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * categories.other_categories
   */
  export type categories$other_categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
    orderBy?: categoriesOrderByWithRelationInput | categoriesOrderByWithRelationInput[]
    cursor?: categoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoriesScalarFieldEnum | CategoriesScalarFieldEnum[]
  }

  /**
   * categories.products
   */
  export type categories$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    cursor?: productsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * categories without action
   */
  export type categoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
  }


  /**
   * Model order_items
   */

  export type AggregateOrder_items = {
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  export type Order_itemsAvgAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    variant_id: number | null
    price: Decimal | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type Order_itemsSumAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    variant_id: number | null
    price: Decimal | null
    quantity: number | null
    total_price: Decimal | null
  }

  export type Order_itemsMinAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    variant_id: number | null
    product_name: string | null
    variant_description: string | null
    price: Decimal | null
    quantity: number | null
    total_price: Decimal | null
    created_at: Date | null
  }

  export type Order_itemsMaxAggregateOutputType = {
    id: number | null
    order_id: number | null
    product_id: number | null
    variant_id: number | null
    product_name: string | null
    variant_description: string | null
    price: Decimal | null
    quantity: number | null
    total_price: Decimal | null
    created_at: Date | null
  }

  export type Order_itemsCountAggregateOutputType = {
    id: number
    order_id: number
    product_id: number
    variant_id: number
    product_name: number
    variant_description: number
    price: number
    quantity: number
    total_price: number
    created_at: number
    _all: number
  }


  export type Order_itemsAvgAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    variant_id?: true
    price?: true
    quantity?: true
    total_price?: true
  }

  export type Order_itemsSumAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    variant_id?: true
    price?: true
    quantity?: true
    total_price?: true
  }

  export type Order_itemsMinAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    variant_id?: true
    product_name?: true
    variant_description?: true
    price?: true
    quantity?: true
    total_price?: true
    created_at?: true
  }

  export type Order_itemsMaxAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    variant_id?: true
    product_name?: true
    variant_description?: true
    price?: true
    quantity?: true
    total_price?: true
    created_at?: true
  }

  export type Order_itemsCountAggregateInputType = {
    id?: true
    order_id?: true
    product_id?: true
    variant_id?: true
    product_name?: true
    variant_description?: true
    price?: true
    quantity?: true
    total_price?: true
    created_at?: true
    _all?: true
  }

  export type Order_itemsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to aggregate.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned order_items
    **/
    _count?: true | Order_itemsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Order_itemsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Order_itemsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Order_itemsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Order_itemsMaxAggregateInputType
  }

  export type GetOrder_itemsAggregateType<T extends Order_itemsAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder_items]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder_items[P]>
      : GetScalarType<T[P], AggregateOrder_items[P]>
  }




  export type order_itemsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithAggregationInput | order_itemsOrderByWithAggregationInput[]
    by: Order_itemsScalarFieldEnum[] | Order_itemsScalarFieldEnum
    having?: order_itemsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Order_itemsCountAggregateInputType | true
    _avg?: Order_itemsAvgAggregateInputType
    _sum?: Order_itemsSumAggregateInputType
    _min?: Order_itemsMinAggregateInputType
    _max?: Order_itemsMaxAggregateInputType
  }

  export type Order_itemsGroupByOutputType = {
    id: number
    order_id: number | null
    product_id: number | null
    variant_id: number | null
    product_name: string
    variant_description: string | null
    price: Decimal
    quantity: number
    total_price: Decimal
    created_at: Date | null
    _count: Order_itemsCountAggregateOutputType | null
    _avg: Order_itemsAvgAggregateOutputType | null
    _sum: Order_itemsSumAggregateOutputType | null
    _min: Order_itemsMinAggregateOutputType | null
    _max: Order_itemsMaxAggregateOutputType | null
  }

  type GetOrder_itemsGroupByPayload<T extends order_itemsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Order_itemsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Order_itemsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
            : GetScalarType<T[P], Order_itemsGroupByOutputType[P]>
        }
      >
    >


  export type order_itemsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    product_name?: boolean
    variant_description?: boolean
    price?: boolean
    quantity?: boolean
    total_price?: boolean
    created_at?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
    product_variants?: boolean | order_items$product_variantsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    product_name?: boolean
    variant_description?: boolean
    price?: boolean
    quantity?: boolean
    total_price?: boolean
    created_at?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
    product_variants?: boolean | order_items$product_variantsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    product_name?: boolean
    variant_description?: boolean
    price?: boolean
    quantity?: boolean
    total_price?: boolean
    created_at?: boolean
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
    product_variants?: boolean | order_items$product_variantsArgs<ExtArgs>
  }, ExtArgs["result"]["order_items"]>

  export type order_itemsSelectScalar = {
    id?: boolean
    order_id?: boolean
    product_id?: boolean
    variant_id?: boolean
    product_name?: boolean
    variant_description?: boolean
    price?: boolean
    quantity?: boolean
    total_price?: boolean
    created_at?: boolean
  }

  export type order_itemsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "order_id" | "product_id" | "variant_id" | "product_name" | "variant_description" | "price" | "quantity" | "total_price" | "created_at", ExtArgs["result"]["order_items"]>
  export type order_itemsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
    product_variants?: boolean | order_items$product_variantsArgs<ExtArgs>
  }
  export type order_itemsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
    product_variants?: boolean | order_items$product_variantsArgs<ExtArgs>
  }
  export type order_itemsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    orders?: boolean | order_items$ordersArgs<ExtArgs>
    products?: boolean | order_items$productsArgs<ExtArgs>
    product_variants?: boolean | order_items$product_variantsArgs<ExtArgs>
  }

  export type $order_itemsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "order_items"
    objects: {
      orders: Prisma.$ordersPayload<ExtArgs> | null
      products: Prisma.$productsPayload<ExtArgs> | null
      product_variants: Prisma.$product_variantsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      order_id: number | null
      product_id: number | null
      variant_id: number | null
      product_name: string
      variant_description: string | null
      price: Prisma.Decimal
      quantity: number
      total_price: Prisma.Decimal
      created_at: Date | null
    }, ExtArgs["result"]["order_items"]>
    composites: {}
  }

  type order_itemsGetPayload<S extends boolean | null | undefined | order_itemsDefaultArgs> = $Result.GetResult<Prisma.$order_itemsPayload, S>

  type order_itemsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<order_itemsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Order_itemsCountAggregateInputType | true
    }

  export interface order_itemsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['order_items'], meta: { name: 'order_items' } }
    /**
     * Find zero or one Order_items that matches the filter.
     * @param {order_itemsFindUniqueArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends order_itemsFindUniqueArgs>(args: SelectSubset<T, order_itemsFindUniqueArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order_items that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {order_itemsFindUniqueOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends order_itemsFindUniqueOrThrowArgs>(args: SelectSubset<T, order_itemsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends order_itemsFindFirstArgs>(args?: SelectSubset<T, order_itemsFindFirstArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order_items that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindFirstOrThrowArgs} args - Arguments to find a Order_items
     * @example
     * // Get one Order_items
     * const order_items = await prisma.order_items.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends order_itemsFindFirstOrThrowArgs>(args?: SelectSubset<T, order_itemsFindFirstOrThrowArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Order_items that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Order_items
     * const order_items = await prisma.order_items.findMany()
     * 
     * // Get first 10 Order_items
     * const order_items = await prisma.order_items.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends order_itemsFindManyArgs>(args?: SelectSubset<T, order_itemsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order_items.
     * @param {order_itemsCreateArgs} args - Arguments to create a Order_items.
     * @example
     * // Create one Order_items
     * const Order_items = await prisma.order_items.create({
     *   data: {
     *     // ... data to create a Order_items
     *   }
     * })
     * 
     */
    create<T extends order_itemsCreateArgs>(args: SelectSubset<T, order_itemsCreateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Order_items.
     * @param {order_itemsCreateManyArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends order_itemsCreateManyArgs>(args?: SelectSubset<T, order_itemsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Order_items and returns the data saved in the database.
     * @param {order_itemsCreateManyAndReturnArgs} args - Arguments to create many Order_items.
     * @example
     * // Create many Order_items
     * const order_items = await prisma.order_items.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends order_itemsCreateManyAndReturnArgs>(args?: SelectSubset<T, order_itemsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order_items.
     * @param {order_itemsDeleteArgs} args - Arguments to delete one Order_items.
     * @example
     * // Delete one Order_items
     * const Order_items = await prisma.order_items.delete({
     *   where: {
     *     // ... filter to delete one Order_items
     *   }
     * })
     * 
     */
    delete<T extends order_itemsDeleteArgs>(args: SelectSubset<T, order_itemsDeleteArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order_items.
     * @param {order_itemsUpdateArgs} args - Arguments to update one Order_items.
     * @example
     * // Update one Order_items
     * const order_items = await prisma.order_items.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends order_itemsUpdateArgs>(args: SelectSubset<T, order_itemsUpdateArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Order_items.
     * @param {order_itemsDeleteManyArgs} args - Arguments to filter Order_items to delete.
     * @example
     * // Delete a few Order_items
     * const { count } = await prisma.order_items.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends order_itemsDeleteManyArgs>(args?: SelectSubset<T, order_itemsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends order_itemsUpdateManyArgs>(args: SelectSubset<T, order_itemsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Order_items and returns the data updated in the database.
     * @param {order_itemsUpdateManyAndReturnArgs} args - Arguments to update many Order_items.
     * @example
     * // Update many Order_items
     * const order_items = await prisma.order_items.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Order_items and only return the `id`
     * const order_itemsWithIdOnly = await prisma.order_items.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends order_itemsUpdateManyAndReturnArgs>(args: SelectSubset<T, order_itemsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order_items.
     * @param {order_itemsUpsertArgs} args - Arguments to update or create a Order_items.
     * @example
     * // Update or create a Order_items
     * const order_items = await prisma.order_items.upsert({
     *   create: {
     *     // ... data to create a Order_items
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order_items we want to update
     *   }
     * })
     */
    upsert<T extends order_itemsUpsertArgs>(args: SelectSubset<T, order_itemsUpsertArgs<ExtArgs>>): Prisma__order_itemsClient<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsCountArgs} args - Arguments to filter Order_items to count.
     * @example
     * // Count the number of Order_items
     * const count = await prisma.order_items.count({
     *   where: {
     *     // ... the filter for the Order_items we want to count
     *   }
     * })
    **/
    count<T extends order_itemsCountArgs>(
      args?: Subset<T, order_itemsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Order_itemsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Order_itemsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Order_itemsAggregateArgs>(args: Subset<T, Order_itemsAggregateArgs>): Prisma.PrismaPromise<GetOrder_itemsAggregateType<T>>

    /**
     * Group by Order_items.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {order_itemsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends order_itemsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: order_itemsGroupByArgs['orderBy'] }
        : { orderBy?: order_itemsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, order_itemsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrder_itemsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the order_items model
   */
  readonly fields: order_itemsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for order_items.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__order_itemsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    orders<T extends order_items$ordersArgs<ExtArgs> = {}>(args?: Subset<T, order_items$ordersArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    products<T extends order_items$productsArgs<ExtArgs> = {}>(args?: Subset<T, order_items$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    product_variants<T extends order_items$product_variantsArgs<ExtArgs> = {}>(args?: Subset<T, order_items$product_variantsArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the order_items model
   */
  interface order_itemsFieldRefs {
    readonly id: FieldRef<"order_items", 'Int'>
    readonly order_id: FieldRef<"order_items", 'Int'>
    readonly product_id: FieldRef<"order_items", 'Int'>
    readonly variant_id: FieldRef<"order_items", 'Int'>
    readonly product_name: FieldRef<"order_items", 'String'>
    readonly variant_description: FieldRef<"order_items", 'String'>
    readonly price: FieldRef<"order_items", 'Decimal'>
    readonly quantity: FieldRef<"order_items", 'Int'>
    readonly total_price: FieldRef<"order_items", 'Decimal'>
    readonly created_at: FieldRef<"order_items", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * order_items findUnique
   */
  export type order_itemsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findUniqueOrThrow
   */
  export type order_itemsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items findFirst
   */
  export type order_itemsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findFirstOrThrow
   */
  export type order_itemsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of order_items.
     */
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items findMany
   */
  export type order_itemsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter, which order_items to fetch.
     */
    where?: order_itemsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of order_items to fetch.
     */
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing order_items.
     */
    cursor?: order_itemsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` order_items from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` order_items.
     */
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * order_items create
   */
  export type order_itemsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to create a order_items.
     */
    data: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
  }

  /**
   * order_items createMany
   */
  export type order_itemsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * order_items createManyAndReturn
   */
  export type order_itemsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to create many order_items.
     */
    data: order_itemsCreateManyInput | order_itemsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items update
   */
  export type order_itemsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The data needed to update a order_items.
     */
    data: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
    /**
     * Choose, which order_items to update.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items updateMany
   */
  export type order_itemsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
  }

  /**
   * order_items updateManyAndReturn
   */
  export type order_itemsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * The data used to update order_items.
     */
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyInput>
    /**
     * Filter which order_items to update
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * order_items upsert
   */
  export type order_itemsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * The filter to search for the order_items to update in case it exists.
     */
    where: order_itemsWhereUniqueInput
    /**
     * In case the order_items found by the `where` argument doesn't exist, create a new order_items with this data.
     */
    create: XOR<order_itemsCreateInput, order_itemsUncheckedCreateInput>
    /**
     * In case the order_items was found with the provided `where` argument, update it with this data.
     */
    update: XOR<order_itemsUpdateInput, order_itemsUncheckedUpdateInput>
  }

  /**
   * order_items delete
   */
  export type order_itemsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    /**
     * Filter which order_items to delete.
     */
    where: order_itemsWhereUniqueInput
  }

  /**
   * order_items deleteMany
   */
  export type order_itemsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which order_items to delete
     */
    where?: order_itemsWhereInput
    /**
     * Limit how many order_items to delete.
     */
    limit?: number
  }

  /**
   * order_items.orders
   */
  export type order_items$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
  }

  /**
   * order_items.products
   */
  export type order_items$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * order_items.product_variants
   */
  export type order_items$product_variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    where?: product_variantsWhereInput
  }

  /**
   * order_items without action
   */
  export type order_itemsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
  }


  /**
   * Model orders
   */

  export type AggregateOrders = {
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  export type OrdersAvgAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
    shipping_address_id: number | null
    billing_address_id: number | null
  }

  export type OrdersSumAggregateOutputType = {
    id: number | null
    user_id: number | null
    total_amount: Decimal | null
    shipping_address_id: number | null
    billing_address_id: number | null
  }

  export type OrdersMinAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_number: string | null
    status: string | null
    total_amount: Decimal | null
    shipping_address_id: number | null
    billing_address_id: number | null
    payment_method: string | null
    payment_status: string | null
    tracking_number: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersMaxAggregateOutputType = {
    id: number | null
    user_id: number | null
    order_number: string | null
    status: string | null
    total_amount: Decimal | null
    shipping_address_id: number | null
    billing_address_id: number | null
    payment_method: string | null
    payment_status: string | null
    tracking_number: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type OrdersCountAggregateOutputType = {
    id: number
    user_id: number
    order_number: number
    status: number
    total_amount: number
    shipping_address_id: number
    billing_address_id: number
    payment_method: number
    payment_status: number
    tracking_number: number
    notes: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type OrdersAvgAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
  }

  export type OrdersSumAggregateInputType = {
    id?: true
    user_id?: true
    total_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
  }

  export type OrdersMinAggregateInputType = {
    id?: true
    user_id?: true
    order_number?: true
    status?: true
    total_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
    payment_method?: true
    payment_status?: true
    tracking_number?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersMaxAggregateInputType = {
    id?: true
    user_id?: true
    order_number?: true
    status?: true
    total_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
    payment_method?: true
    payment_status?: true
    tracking_number?: true
    notes?: true
    created_at?: true
    updated_at?: true
  }

  export type OrdersCountAggregateInputType = {
    id?: true
    user_id?: true
    order_number?: true
    status?: true
    total_amount?: true
    shipping_address_id?: true
    billing_address_id?: true
    payment_method?: true
    payment_status?: true
    tracking_number?: true
    notes?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type OrdersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to aggregate.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned orders
    **/
    _count?: true | OrdersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrdersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrdersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrdersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrdersMaxAggregateInputType
  }

  export type GetOrdersAggregateType<T extends OrdersAggregateArgs> = {
        [P in keyof T & keyof AggregateOrders]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrders[P]>
      : GetScalarType<T[P], AggregateOrders[P]>
  }




  export type ordersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithAggregationInput | ordersOrderByWithAggregationInput[]
    by: OrdersScalarFieldEnum[] | OrdersScalarFieldEnum
    having?: ordersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrdersCountAggregateInputType | true
    _avg?: OrdersAvgAggregateInputType
    _sum?: OrdersSumAggregateInputType
    _min?: OrdersMinAggregateInputType
    _max?: OrdersMaxAggregateInputType
  }

  export type OrdersGroupByOutputType = {
    id: number
    user_id: number | null
    order_number: string
    status: string
    total_amount: Decimal
    shipping_address_id: number | null
    billing_address_id: number | null
    payment_method: string
    payment_status: string | null
    tracking_number: string | null
    notes: string | null
    created_at: Date | null
    updated_at: Date | null
    _count: OrdersCountAggregateOutputType | null
    _avg: OrdersAvgAggregateOutputType | null
    _sum: OrdersSumAggregateOutputType | null
    _min: OrdersMinAggregateOutputType | null
    _max: OrdersMaxAggregateOutputType | null
  }

  type GetOrdersGroupByPayload<T extends ordersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrdersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrdersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrdersGroupByOutputType[P]>
            : GetScalarType<T[P], OrdersGroupByOutputType[P]>
        }
      >
    >


  export type ordersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_method?: boolean
    payment_status?: boolean
    tracking_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    addresses_orders_billing_address_idToaddresses?: boolean | orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>
    addresses_orders_shipping_address_idToaddresses?: boolean | orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_method?: boolean
    payment_status?: boolean
    tracking_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses_orders_billing_address_idToaddresses?: boolean | orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>
    addresses_orders_shipping_address_idToaddresses?: boolean | orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    user_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_method?: boolean
    payment_status?: boolean
    tracking_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses_orders_billing_address_idToaddresses?: boolean | orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>
    addresses_orders_shipping_address_idToaddresses?: boolean | orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }, ExtArgs["result"]["orders"]>

  export type ordersSelectScalar = {
    id?: boolean
    user_id?: boolean
    order_number?: boolean
    status?: boolean
    total_amount?: boolean
    shipping_address_id?: boolean
    billing_address_id?: boolean
    payment_method?: boolean
    payment_status?: boolean
    tracking_number?: boolean
    notes?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type ordersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "user_id" | "order_number" | "status" | "total_amount" | "shipping_address_id" | "billing_address_id" | "payment_method" | "payment_status" | "tracking_number" | "notes" | "created_at" | "updated_at", ExtArgs["result"]["orders"]>
  export type ordersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order_items?: boolean | orders$order_itemsArgs<ExtArgs>
    addresses_orders_billing_address_idToaddresses?: boolean | orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>
    addresses_orders_shipping_address_idToaddresses?: boolean | orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
    _count?: boolean | OrdersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ordersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses_orders_billing_address_idToaddresses?: boolean | orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>
    addresses_orders_shipping_address_idToaddresses?: boolean | orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }
  export type ordersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses_orders_billing_address_idToaddresses?: boolean | orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>
    addresses_orders_shipping_address_idToaddresses?: boolean | orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>
    users?: boolean | orders$usersArgs<ExtArgs>
  }

  export type $ordersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "orders"
    objects: {
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      addresses_orders_billing_address_idToaddresses: Prisma.$addressesPayload<ExtArgs> | null
      addresses_orders_shipping_address_idToaddresses: Prisma.$addressesPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      user_id: number | null
      order_number: string
      status: string
      total_amount: Prisma.Decimal
      shipping_address_id: number | null
      billing_address_id: number | null
      payment_method: string
      payment_status: string | null
      tracking_number: string | null
      notes: string | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["orders"]>
    composites: {}
  }

  type ordersGetPayload<S extends boolean | null | undefined | ordersDefaultArgs> = $Result.GetResult<Prisma.$ordersPayload, S>

  type ordersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ordersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrdersCountAggregateInputType | true
    }

  export interface ordersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['orders'], meta: { name: 'orders' } }
    /**
     * Find zero or one Orders that matches the filter.
     * @param {ordersFindUniqueArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ordersFindUniqueArgs>(args: SelectSubset<T, ordersFindUniqueArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Orders that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ordersFindUniqueOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ordersFindUniqueOrThrowArgs>(args: SelectSubset<T, ordersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ordersFindFirstArgs>(args?: SelectSubset<T, ordersFindFirstArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Orders that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindFirstOrThrowArgs} args - Arguments to find a Orders
     * @example
     * // Get one Orders
     * const orders = await prisma.orders.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ordersFindFirstOrThrowArgs>(args?: SelectSubset<T, ordersFindFirstOrThrowArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.orders.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.orders.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ordersWithIdOnly = await prisma.orders.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ordersFindManyArgs>(args?: SelectSubset<T, ordersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Orders.
     * @param {ordersCreateArgs} args - Arguments to create a Orders.
     * @example
     * // Create one Orders
     * const Orders = await prisma.orders.create({
     *   data: {
     *     // ... data to create a Orders
     *   }
     * })
     * 
     */
    create<T extends ordersCreateArgs>(args: SelectSubset<T, ordersCreateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {ordersCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ordersCreateManyArgs>(args?: SelectSubset<T, ordersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {ordersCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const orders = await prisma.orders.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ordersCreateManyAndReturnArgs>(args?: SelectSubset<T, ordersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Orders.
     * @param {ordersDeleteArgs} args - Arguments to delete one Orders.
     * @example
     * // Delete one Orders
     * const Orders = await prisma.orders.delete({
     *   where: {
     *     // ... filter to delete one Orders
     *   }
     * })
     * 
     */
    delete<T extends ordersDeleteArgs>(args: SelectSubset<T, ordersDeleteArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Orders.
     * @param {ordersUpdateArgs} args - Arguments to update one Orders.
     * @example
     * // Update one Orders
     * const orders = await prisma.orders.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ordersUpdateArgs>(args: SelectSubset<T, ordersUpdateArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {ordersDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.orders.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ordersDeleteManyArgs>(args?: SelectSubset<T, ordersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ordersUpdateManyArgs>(args: SelectSubset<T, ordersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {ordersUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const orders = await prisma.orders.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const ordersWithIdOnly = await prisma.orders.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ordersUpdateManyAndReturnArgs>(args: SelectSubset<T, ordersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Orders.
     * @param {ordersUpsertArgs} args - Arguments to update or create a Orders.
     * @example
     * // Update or create a Orders
     * const orders = await prisma.orders.upsert({
     *   create: {
     *     // ... data to create a Orders
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Orders we want to update
     *   }
     * })
     */
    upsert<T extends ordersUpsertArgs>(args: SelectSubset<T, ordersUpsertArgs<ExtArgs>>): Prisma__ordersClient<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.orders.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends ordersCountArgs>(
      args?: Subset<T, ordersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrdersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrdersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrdersAggregateArgs>(args: Subset<T, OrdersAggregateArgs>): Prisma.PrismaPromise<GetOrdersAggregateType<T>>

    /**
     * Group by Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ordersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ordersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ordersGroupByArgs['orderBy'] }
        : { orderBy?: ordersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ordersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrdersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the orders model
   */
  readonly fields: ordersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for orders.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ordersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order_items<T extends orders$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, orders$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    addresses_orders_billing_address_idToaddresses<T extends orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs> = {}>(args?: Subset<T, orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    addresses_orders_shipping_address_idToaddresses<T extends orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs> = {}>(args?: Subset<T, orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs>>): Prisma__addressesClient<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends orders$usersArgs<ExtArgs> = {}>(args?: Subset<T, orders$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the orders model
   */
  interface ordersFieldRefs {
    readonly id: FieldRef<"orders", 'Int'>
    readonly user_id: FieldRef<"orders", 'Int'>
    readonly order_number: FieldRef<"orders", 'String'>
    readonly status: FieldRef<"orders", 'String'>
    readonly total_amount: FieldRef<"orders", 'Decimal'>
    readonly shipping_address_id: FieldRef<"orders", 'Int'>
    readonly billing_address_id: FieldRef<"orders", 'Int'>
    readonly payment_method: FieldRef<"orders", 'String'>
    readonly payment_status: FieldRef<"orders", 'String'>
    readonly tracking_number: FieldRef<"orders", 'String'>
    readonly notes: FieldRef<"orders", 'String'>
    readonly created_at: FieldRef<"orders", 'DateTime'>
    readonly updated_at: FieldRef<"orders", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * orders findUnique
   */
  export type ordersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findUniqueOrThrow
   */
  export type ordersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders findFirst
   */
  export type ordersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findFirstOrThrow
   */
  export type ordersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of orders.
     */
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders findMany
   */
  export type ordersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter, which orders to fetch.
     */
    where?: ordersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of orders to fetch.
     */
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing orders.
     */
    cursor?: ordersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` orders.
     */
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * orders create
   */
  export type ordersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to create a orders.
     */
    data: XOR<ordersCreateInput, ordersUncheckedCreateInput>
  }

  /**
   * orders createMany
   */
  export type ordersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * orders createManyAndReturn
   */
  export type ordersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to create many orders.
     */
    data: ordersCreateManyInput | ordersCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders update
   */
  export type ordersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The data needed to update a orders.
     */
    data: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
    /**
     * Choose, which orders to update.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders updateMany
   */
  export type ordersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
  }

  /**
   * orders updateManyAndReturn
   */
  export type ordersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * The data used to update orders.
     */
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyInput>
    /**
     * Filter which orders to update
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * orders upsert
   */
  export type ordersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * The filter to search for the orders to update in case it exists.
     */
    where: ordersWhereUniqueInput
    /**
     * In case the orders found by the `where` argument doesn't exist, create a new orders with this data.
     */
    create: XOR<ordersCreateInput, ordersUncheckedCreateInput>
    /**
     * In case the orders was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ordersUpdateInput, ordersUncheckedUpdateInput>
  }

  /**
   * orders delete
   */
  export type ordersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    /**
     * Filter which orders to delete.
     */
    where: ordersWhereUniqueInput
  }

  /**
   * orders deleteMany
   */
  export type ordersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which orders to delete
     */
    where?: ordersWhereInput
    /**
     * Limit how many orders to delete.
     */
    limit?: number
  }

  /**
   * orders.order_items
   */
  export type orders$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * orders.addresses_orders_billing_address_idToaddresses
   */
  export type orders$addresses_orders_billing_address_idToaddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
  }

  /**
   * orders.addresses_orders_shipping_address_idToaddresses
   */
  export type orders$addresses_orders_shipping_address_idToaddressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
  }

  /**
   * orders.users
   */
  export type orders$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * orders without action
   */
  export type ordersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
  }


  /**
   * Model product_images
   */

  export type AggregateProduct_images = {
    _count: Product_imagesCountAggregateOutputType | null
    _avg: Product_imagesAvgAggregateOutputType | null
    _sum: Product_imagesSumAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  export type Product_imagesAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type Product_imagesSumAggregateOutputType = {
    id: number | null
    product_id: number | null
  }

  export type Product_imagesMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    url: string | null
    alt_text: string | null
    is_primary: boolean | null
    created_at: Date | null
  }

  export type Product_imagesMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    url: string | null
    alt_text: string | null
    is_primary: boolean | null
    created_at: Date | null
  }

  export type Product_imagesCountAggregateOutputType = {
    id: number
    product_id: number
    url: number
    alt_text: number
    is_primary: number
    created_at: number
    _all: number
  }


  export type Product_imagesAvgAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type Product_imagesSumAggregateInputType = {
    id?: true
    product_id?: true
  }

  export type Product_imagesMinAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    alt_text?: true
    is_primary?: true
    created_at?: true
  }

  export type Product_imagesMaxAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    alt_text?: true
    is_primary?: true
    created_at?: true
  }

  export type Product_imagesCountAggregateInputType = {
    id?: true
    product_id?: true
    url?: true
    alt_text?: true
    is_primary?: true
    created_at?: true
    _all?: true
  }

  export type Product_imagesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to aggregate.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_images
    **/
    _count?: true | Product_imagesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_imagesAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_imagesSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_imagesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_imagesMaxAggregateInputType
  }

  export type GetProduct_imagesAggregateType<T extends Product_imagesAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_images]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_images[P]>
      : GetScalarType<T[P], AggregateProduct_images[P]>
  }




  export type product_imagesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithAggregationInput | product_imagesOrderByWithAggregationInput[]
    by: Product_imagesScalarFieldEnum[] | Product_imagesScalarFieldEnum
    having?: product_imagesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_imagesCountAggregateInputType | true
    _avg?: Product_imagesAvgAggregateInputType
    _sum?: Product_imagesSumAggregateInputType
    _min?: Product_imagesMinAggregateInputType
    _max?: Product_imagesMaxAggregateInputType
  }

  export type Product_imagesGroupByOutputType = {
    id: number
    product_id: number | null
    url: string
    alt_text: string | null
    is_primary: boolean | null
    created_at: Date | null
    _count: Product_imagesCountAggregateOutputType | null
    _avg: Product_imagesAvgAggregateOutputType | null
    _sum: Product_imagesSumAggregateOutputType | null
    _min: Product_imagesMinAggregateOutputType | null
    _max: Product_imagesMaxAggregateOutputType | null
  }

  type GetProduct_imagesGroupByPayload<T extends product_imagesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_imagesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_imagesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
            : GetScalarType<T[P], Product_imagesGroupByOutputType[P]>
        }
      >
    >


  export type product_imagesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_primary?: boolean
    created_at?: boolean
    products?: boolean | product_images$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_primary?: boolean
    created_at?: boolean
    products?: boolean | product_images$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_primary?: boolean
    created_at?: boolean
    products?: boolean | product_images$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_images"]>

  export type product_imagesSelectScalar = {
    id?: boolean
    product_id?: boolean
    url?: boolean
    alt_text?: boolean
    is_primary?: boolean
    created_at?: boolean
  }

  export type product_imagesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "url" | "alt_text" | "is_primary" | "created_at", ExtArgs["result"]["product_images"]>
  export type product_imagesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_images$productsArgs<ExtArgs>
  }
  export type product_imagesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_images$productsArgs<ExtArgs>
  }
  export type product_imagesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_images$productsArgs<ExtArgs>
  }

  export type $product_imagesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_images"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number | null
      url: string
      alt_text: string | null
      is_primary: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["product_images"]>
    composites: {}
  }

  type product_imagesGetPayload<S extends boolean | null | undefined | product_imagesDefaultArgs> = $Result.GetResult<Prisma.$product_imagesPayload, S>

  type product_imagesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_imagesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_imagesCountAggregateInputType | true
    }

  export interface product_imagesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_images'], meta: { name: 'product_images' } }
    /**
     * Find zero or one Product_images that matches the filter.
     * @param {product_imagesFindUniqueArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_imagesFindUniqueArgs>(args: SelectSubset<T, product_imagesFindUniqueArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_images that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_imagesFindUniqueOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_imagesFindUniqueOrThrowArgs>(args: SelectSubset<T, product_imagesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_imagesFindFirstArgs>(args?: SelectSubset<T, product_imagesFindFirstArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_images that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindFirstOrThrowArgs} args - Arguments to find a Product_images
     * @example
     * // Get one Product_images
     * const product_images = await prisma.product_images.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_imagesFindFirstOrThrowArgs>(args?: SelectSubset<T, product_imagesFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_images that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_images
     * const product_images = await prisma.product_images.findMany()
     * 
     * // Get first 10 Product_images
     * const product_images = await prisma.product_images.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_imagesFindManyArgs>(args?: SelectSubset<T, product_imagesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_images.
     * @param {product_imagesCreateArgs} args - Arguments to create a Product_images.
     * @example
     * // Create one Product_images
     * const Product_images = await prisma.product_images.create({
     *   data: {
     *     // ... data to create a Product_images
     *   }
     * })
     * 
     */
    create<T extends product_imagesCreateArgs>(args: SelectSubset<T, product_imagesCreateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_images.
     * @param {product_imagesCreateManyArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_imagesCreateManyArgs>(args?: SelectSubset<T, product_imagesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_images and returns the data saved in the database.
     * @param {product_imagesCreateManyAndReturnArgs} args - Arguments to create many Product_images.
     * @example
     * // Create many Product_images
     * const product_images = await prisma.product_images.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_images and only return the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_imagesCreateManyAndReturnArgs>(args?: SelectSubset<T, product_imagesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_images.
     * @param {product_imagesDeleteArgs} args - Arguments to delete one Product_images.
     * @example
     * // Delete one Product_images
     * const Product_images = await prisma.product_images.delete({
     *   where: {
     *     // ... filter to delete one Product_images
     *   }
     * })
     * 
     */
    delete<T extends product_imagesDeleteArgs>(args: SelectSubset<T, product_imagesDeleteArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_images.
     * @param {product_imagesUpdateArgs} args - Arguments to update one Product_images.
     * @example
     * // Update one Product_images
     * const product_images = await prisma.product_images.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_imagesUpdateArgs>(args: SelectSubset<T, product_imagesUpdateArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_images.
     * @param {product_imagesDeleteManyArgs} args - Arguments to filter Product_images to delete.
     * @example
     * // Delete a few Product_images
     * const { count } = await prisma.product_images.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_imagesDeleteManyArgs>(args?: SelectSubset<T, product_imagesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_imagesUpdateManyArgs>(args: SelectSubset<T, product_imagesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_images and returns the data updated in the database.
     * @param {product_imagesUpdateManyAndReturnArgs} args - Arguments to update many Product_images.
     * @example
     * // Update many Product_images
     * const product_images = await prisma.product_images.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_images and only return the `id`
     * const product_imagesWithIdOnly = await prisma.product_images.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_imagesUpdateManyAndReturnArgs>(args: SelectSubset<T, product_imagesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_images.
     * @param {product_imagesUpsertArgs} args - Arguments to update or create a Product_images.
     * @example
     * // Update or create a Product_images
     * const product_images = await prisma.product_images.upsert({
     *   create: {
     *     // ... data to create a Product_images
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_images we want to update
     *   }
     * })
     */
    upsert<T extends product_imagesUpsertArgs>(args: SelectSubset<T, product_imagesUpsertArgs<ExtArgs>>): Prisma__product_imagesClient<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesCountArgs} args - Arguments to filter Product_images to count.
     * @example
     * // Count the number of Product_images
     * const count = await prisma.product_images.count({
     *   where: {
     *     // ... the filter for the Product_images we want to count
     *   }
     * })
    **/
    count<T extends product_imagesCountArgs>(
      args?: Subset<T, product_imagesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_imagesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_imagesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_imagesAggregateArgs>(args: Subset<T, Product_imagesAggregateArgs>): Prisma.PrismaPromise<GetProduct_imagesAggregateType<T>>

    /**
     * Group by Product_images.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_imagesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_imagesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_imagesGroupByArgs['orderBy'] }
        : { orderBy?: product_imagesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_imagesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_imagesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_images model
   */
  readonly fields: product_imagesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_images.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_imagesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends product_images$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_images$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_images model
   */
  interface product_imagesFieldRefs {
    readonly id: FieldRef<"product_images", 'Int'>
    readonly product_id: FieldRef<"product_images", 'Int'>
    readonly url: FieldRef<"product_images", 'String'>
    readonly alt_text: FieldRef<"product_images", 'String'>
    readonly is_primary: FieldRef<"product_images", 'Boolean'>
    readonly created_at: FieldRef<"product_images", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_images findUnique
   */
  export type product_imagesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findUniqueOrThrow
   */
  export type product_imagesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images findFirst
   */
  export type product_imagesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findFirstOrThrow
   */
  export type product_imagesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_images.
     */
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images findMany
   */
  export type product_imagesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter, which product_images to fetch.
     */
    where?: product_imagesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_images to fetch.
     */
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_images.
     */
    cursor?: product_imagesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_images from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_images.
     */
    skip?: number
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * product_images create
   */
  export type product_imagesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to create a product_images.
     */
    data: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
  }

  /**
   * product_images createMany
   */
  export type product_imagesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_images createManyAndReturn
   */
  export type product_imagesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * The data used to create many product_images.
     */
    data: product_imagesCreateManyInput | product_imagesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_images update
   */
  export type product_imagesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The data needed to update a product_images.
     */
    data: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
    /**
     * Choose, which product_images to update.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images updateMany
   */
  export type product_imagesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
  }

  /**
   * product_images updateManyAndReturn
   */
  export type product_imagesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * The data used to update product_images.
     */
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyInput>
    /**
     * Filter which product_images to update
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_images upsert
   */
  export type product_imagesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * The filter to search for the product_images to update in case it exists.
     */
    where: product_imagesWhereUniqueInput
    /**
     * In case the product_images found by the `where` argument doesn't exist, create a new product_images with this data.
     */
    create: XOR<product_imagesCreateInput, product_imagesUncheckedCreateInput>
    /**
     * In case the product_images was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_imagesUpdateInput, product_imagesUncheckedUpdateInput>
  }

  /**
   * product_images delete
   */
  export type product_imagesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    /**
     * Filter which product_images to delete.
     */
    where: product_imagesWhereUniqueInput
  }

  /**
   * product_images deleteMany
   */
  export type product_imagesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_images to delete
     */
    where?: product_imagesWhereInput
    /**
     * Limit how many product_images to delete.
     */
    limit?: number
  }

  /**
   * product_images.products
   */
  export type product_images$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_images without action
   */
  export type product_imagesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
  }


  /**
   * Model product_reviews
   */

  export type AggregateProduct_reviews = {
    _count: Product_reviewsCountAggregateOutputType | null
    _avg: Product_reviewsAvgAggregateOutputType | null
    _sum: Product_reviewsSumAggregateOutputType | null
    _min: Product_reviewsMinAggregateOutputType | null
    _max: Product_reviewsMaxAggregateOutputType | null
  }

  export type Product_reviewsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type Product_reviewsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rating: number | null
  }

  export type Product_reviewsMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    is_approved: boolean | null
    created_at: Date | null
  }

  export type Product_reviewsMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    user_id: number | null
    rating: number | null
    comment: string | null
    is_approved: boolean | null
    created_at: Date | null
  }

  export type Product_reviewsCountAggregateOutputType = {
    id: number
    product_id: number
    user_id: number
    rating: number
    comment: number
    is_approved: number
    created_at: number
    _all: number
  }


  export type Product_reviewsAvgAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating?: true
  }

  export type Product_reviewsSumAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating?: true
  }

  export type Product_reviewsMinAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating?: true
    comment?: true
    is_approved?: true
    created_at?: true
  }

  export type Product_reviewsMaxAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating?: true
    comment?: true
    is_approved?: true
    created_at?: true
  }

  export type Product_reviewsCountAggregateInputType = {
    id?: true
    product_id?: true
    user_id?: true
    rating?: true
    comment?: true
    is_approved?: true
    created_at?: true
    _all?: true
  }

  export type Product_reviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_reviews to aggregate.
     */
    where?: product_reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_reviews to fetch.
     */
    orderBy?: product_reviewsOrderByWithRelationInput | product_reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_reviews
    **/
    _count?: true | Product_reviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_reviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_reviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_reviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_reviewsMaxAggregateInputType
  }

  export type GetProduct_reviewsAggregateType<T extends Product_reviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_reviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_reviews[P]>
      : GetScalarType<T[P], AggregateProduct_reviews[P]>
  }




  export type product_reviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_reviewsWhereInput
    orderBy?: product_reviewsOrderByWithAggregationInput | product_reviewsOrderByWithAggregationInput[]
    by: Product_reviewsScalarFieldEnum[] | Product_reviewsScalarFieldEnum
    having?: product_reviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_reviewsCountAggregateInputType | true
    _avg?: Product_reviewsAvgAggregateInputType
    _sum?: Product_reviewsSumAggregateInputType
    _min?: Product_reviewsMinAggregateInputType
    _max?: Product_reviewsMaxAggregateInputType
  }

  export type Product_reviewsGroupByOutputType = {
    id: number
    product_id: number | null
    user_id: number | null
    rating: number
    comment: string | null
    is_approved: boolean | null
    created_at: Date | null
    _count: Product_reviewsCountAggregateOutputType | null
    _avg: Product_reviewsAvgAggregateOutputType | null
    _sum: Product_reviewsSumAggregateOutputType | null
    _min: Product_reviewsMinAggregateOutputType | null
    _max: Product_reviewsMaxAggregateOutputType | null
  }

  type GetProduct_reviewsGroupByPayload<T extends product_reviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_reviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_reviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_reviewsGroupByOutputType[P]>
            : GetScalarType<T[P], Product_reviewsGroupByOutputType[P]>
        }
      >
    >


  export type product_reviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    is_approved?: boolean
    created_at?: boolean
    products?: boolean | product_reviews$productsArgs<ExtArgs>
    users?: boolean | product_reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["product_reviews"]>

  export type product_reviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    is_approved?: boolean
    created_at?: boolean
    products?: boolean | product_reviews$productsArgs<ExtArgs>
    users?: boolean | product_reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["product_reviews"]>

  export type product_reviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    is_approved?: boolean
    created_at?: boolean
    products?: boolean | product_reviews$productsArgs<ExtArgs>
    users?: boolean | product_reviews$usersArgs<ExtArgs>
  }, ExtArgs["result"]["product_reviews"]>

  export type product_reviewsSelectScalar = {
    id?: boolean
    product_id?: boolean
    user_id?: boolean
    rating?: boolean
    comment?: boolean
    is_approved?: boolean
    created_at?: boolean
  }

  export type product_reviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "user_id" | "rating" | "comment" | "is_approved" | "created_at", ExtArgs["result"]["product_reviews"]>
  export type product_reviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_reviews$productsArgs<ExtArgs>
    users?: boolean | product_reviews$usersArgs<ExtArgs>
  }
  export type product_reviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_reviews$productsArgs<ExtArgs>
    users?: boolean | product_reviews$usersArgs<ExtArgs>
  }
  export type product_reviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_reviews$productsArgs<ExtArgs>
    users?: boolean | product_reviews$usersArgs<ExtArgs>
  }

  export type $product_reviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_reviews"
    objects: {
      products: Prisma.$productsPayload<ExtArgs> | null
      users: Prisma.$usersPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number | null
      user_id: number | null
      rating: number
      comment: string | null
      is_approved: boolean | null
      created_at: Date | null
    }, ExtArgs["result"]["product_reviews"]>
    composites: {}
  }

  type product_reviewsGetPayload<S extends boolean | null | undefined | product_reviewsDefaultArgs> = $Result.GetResult<Prisma.$product_reviewsPayload, S>

  type product_reviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_reviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_reviewsCountAggregateInputType | true
    }

  export interface product_reviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_reviews'], meta: { name: 'product_reviews' } }
    /**
     * Find zero or one Product_reviews that matches the filter.
     * @param {product_reviewsFindUniqueArgs} args - Arguments to find a Product_reviews
     * @example
     * // Get one Product_reviews
     * const product_reviews = await prisma.product_reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_reviewsFindUniqueArgs>(args: SelectSubset<T, product_reviewsFindUniqueArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_reviewsFindUniqueOrThrowArgs} args - Arguments to find a Product_reviews
     * @example
     * // Get one Product_reviews
     * const product_reviews = await prisma.product_reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_reviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, product_reviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_reviewsFindFirstArgs} args - Arguments to find a Product_reviews
     * @example
     * // Get one Product_reviews
     * const product_reviews = await prisma.product_reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_reviewsFindFirstArgs>(args?: SelectSubset<T, product_reviewsFindFirstArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_reviewsFindFirstOrThrowArgs} args - Arguments to find a Product_reviews
     * @example
     * // Get one Product_reviews
     * const product_reviews = await prisma.product_reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_reviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, product_reviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_reviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_reviews
     * const product_reviews = await prisma.product_reviews.findMany()
     * 
     * // Get first 10 Product_reviews
     * const product_reviews = await prisma.product_reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_reviewsWithIdOnly = await prisma.product_reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_reviewsFindManyArgs>(args?: SelectSubset<T, product_reviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_reviews.
     * @param {product_reviewsCreateArgs} args - Arguments to create a Product_reviews.
     * @example
     * // Create one Product_reviews
     * const Product_reviews = await prisma.product_reviews.create({
     *   data: {
     *     // ... data to create a Product_reviews
     *   }
     * })
     * 
     */
    create<T extends product_reviewsCreateArgs>(args: SelectSubset<T, product_reviewsCreateArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_reviews.
     * @param {product_reviewsCreateManyArgs} args - Arguments to create many Product_reviews.
     * @example
     * // Create many Product_reviews
     * const product_reviews = await prisma.product_reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_reviewsCreateManyArgs>(args?: SelectSubset<T, product_reviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_reviews and returns the data saved in the database.
     * @param {product_reviewsCreateManyAndReturnArgs} args - Arguments to create many Product_reviews.
     * @example
     * // Create many Product_reviews
     * const product_reviews = await prisma.product_reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_reviews and only return the `id`
     * const product_reviewsWithIdOnly = await prisma.product_reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_reviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, product_reviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_reviews.
     * @param {product_reviewsDeleteArgs} args - Arguments to delete one Product_reviews.
     * @example
     * // Delete one Product_reviews
     * const Product_reviews = await prisma.product_reviews.delete({
     *   where: {
     *     // ... filter to delete one Product_reviews
     *   }
     * })
     * 
     */
    delete<T extends product_reviewsDeleteArgs>(args: SelectSubset<T, product_reviewsDeleteArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_reviews.
     * @param {product_reviewsUpdateArgs} args - Arguments to update one Product_reviews.
     * @example
     * // Update one Product_reviews
     * const product_reviews = await prisma.product_reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_reviewsUpdateArgs>(args: SelectSubset<T, product_reviewsUpdateArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_reviews.
     * @param {product_reviewsDeleteManyArgs} args - Arguments to filter Product_reviews to delete.
     * @example
     * // Delete a few Product_reviews
     * const { count } = await prisma.product_reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_reviewsDeleteManyArgs>(args?: SelectSubset<T, product_reviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_reviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_reviews
     * const product_reviews = await prisma.product_reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_reviewsUpdateManyArgs>(args: SelectSubset<T, product_reviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_reviews and returns the data updated in the database.
     * @param {product_reviewsUpdateManyAndReturnArgs} args - Arguments to update many Product_reviews.
     * @example
     * // Update many Product_reviews
     * const product_reviews = await prisma.product_reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_reviews and only return the `id`
     * const product_reviewsWithIdOnly = await prisma.product_reviews.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_reviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, product_reviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_reviews.
     * @param {product_reviewsUpsertArgs} args - Arguments to update or create a Product_reviews.
     * @example
     * // Update or create a Product_reviews
     * const product_reviews = await prisma.product_reviews.upsert({
     *   create: {
     *     // ... data to create a Product_reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_reviews we want to update
     *   }
     * })
     */
    upsert<T extends product_reviewsUpsertArgs>(args: SelectSubset<T, product_reviewsUpsertArgs<ExtArgs>>): Prisma__product_reviewsClient<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_reviewsCountArgs} args - Arguments to filter Product_reviews to count.
     * @example
     * // Count the number of Product_reviews
     * const count = await prisma.product_reviews.count({
     *   where: {
     *     // ... the filter for the Product_reviews we want to count
     *   }
     * })
    **/
    count<T extends product_reviewsCountArgs>(
      args?: Subset<T, product_reviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_reviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_reviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_reviewsAggregateArgs>(args: Subset<T, Product_reviewsAggregateArgs>): Prisma.PrismaPromise<GetProduct_reviewsAggregateType<T>>

    /**
     * Group by Product_reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_reviewsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_reviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_reviewsGroupByArgs['orderBy'] }
        : { orderBy?: product_reviewsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_reviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_reviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_reviews model
   */
  readonly fields: product_reviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_reviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends product_reviews$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_reviews$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends product_reviews$usersArgs<ExtArgs> = {}>(args?: Subset<T, product_reviews$usersArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_reviews model
   */
  interface product_reviewsFieldRefs {
    readonly id: FieldRef<"product_reviews", 'Int'>
    readonly product_id: FieldRef<"product_reviews", 'Int'>
    readonly user_id: FieldRef<"product_reviews", 'Int'>
    readonly rating: FieldRef<"product_reviews", 'Int'>
    readonly comment: FieldRef<"product_reviews", 'String'>
    readonly is_approved: FieldRef<"product_reviews", 'Boolean'>
    readonly created_at: FieldRef<"product_reviews", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_reviews findUnique
   */
  export type product_reviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * Filter, which product_reviews to fetch.
     */
    where: product_reviewsWhereUniqueInput
  }

  /**
   * product_reviews findUniqueOrThrow
   */
  export type product_reviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * Filter, which product_reviews to fetch.
     */
    where: product_reviewsWhereUniqueInput
  }

  /**
   * product_reviews findFirst
   */
  export type product_reviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * Filter, which product_reviews to fetch.
     */
    where?: product_reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_reviews to fetch.
     */
    orderBy?: product_reviewsOrderByWithRelationInput | product_reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_reviews.
     */
    cursor?: product_reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_reviews.
     */
    distinct?: Product_reviewsScalarFieldEnum | Product_reviewsScalarFieldEnum[]
  }

  /**
   * product_reviews findFirstOrThrow
   */
  export type product_reviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * Filter, which product_reviews to fetch.
     */
    where?: product_reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_reviews to fetch.
     */
    orderBy?: product_reviewsOrderByWithRelationInput | product_reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_reviews.
     */
    cursor?: product_reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_reviews.
     */
    distinct?: Product_reviewsScalarFieldEnum | Product_reviewsScalarFieldEnum[]
  }

  /**
   * product_reviews findMany
   */
  export type product_reviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * Filter, which product_reviews to fetch.
     */
    where?: product_reviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_reviews to fetch.
     */
    orderBy?: product_reviewsOrderByWithRelationInput | product_reviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_reviews.
     */
    cursor?: product_reviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_reviews.
     */
    skip?: number
    distinct?: Product_reviewsScalarFieldEnum | Product_reviewsScalarFieldEnum[]
  }

  /**
   * product_reviews create
   */
  export type product_reviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a product_reviews.
     */
    data: XOR<product_reviewsCreateInput, product_reviewsUncheckedCreateInput>
  }

  /**
   * product_reviews createMany
   */
  export type product_reviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_reviews.
     */
    data: product_reviewsCreateManyInput | product_reviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_reviews createManyAndReturn
   */
  export type product_reviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * The data used to create many product_reviews.
     */
    data: product_reviewsCreateManyInput | product_reviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_reviews update
   */
  export type product_reviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a product_reviews.
     */
    data: XOR<product_reviewsUpdateInput, product_reviewsUncheckedUpdateInput>
    /**
     * Choose, which product_reviews to update.
     */
    where: product_reviewsWhereUniqueInput
  }

  /**
   * product_reviews updateMany
   */
  export type product_reviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_reviews.
     */
    data: XOR<product_reviewsUpdateManyMutationInput, product_reviewsUncheckedUpdateManyInput>
    /**
     * Filter which product_reviews to update
     */
    where?: product_reviewsWhereInput
    /**
     * Limit how many product_reviews to update.
     */
    limit?: number
  }

  /**
   * product_reviews updateManyAndReturn
   */
  export type product_reviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * The data used to update product_reviews.
     */
    data: XOR<product_reviewsUpdateManyMutationInput, product_reviewsUncheckedUpdateManyInput>
    /**
     * Filter which product_reviews to update
     */
    where?: product_reviewsWhereInput
    /**
     * Limit how many product_reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_reviews upsert
   */
  export type product_reviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the product_reviews to update in case it exists.
     */
    where: product_reviewsWhereUniqueInput
    /**
     * In case the product_reviews found by the `where` argument doesn't exist, create a new product_reviews with this data.
     */
    create: XOR<product_reviewsCreateInput, product_reviewsUncheckedCreateInput>
    /**
     * In case the product_reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_reviewsUpdateInput, product_reviewsUncheckedUpdateInput>
  }

  /**
   * product_reviews delete
   */
  export type product_reviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    /**
     * Filter which product_reviews to delete.
     */
    where: product_reviewsWhereUniqueInput
  }

  /**
   * product_reviews deleteMany
   */
  export type product_reviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_reviews to delete
     */
    where?: product_reviewsWhereInput
    /**
     * Limit how many product_reviews to delete.
     */
    limit?: number
  }

  /**
   * product_reviews.products
   */
  export type product_reviews$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_reviews.users
   */
  export type product_reviews$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    where?: usersWhereInput
  }

  /**
   * product_reviews without action
   */
  export type product_reviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
  }


  /**
   * Model product_variants
   */

  export type AggregateProduct_variants = {
    _count: Product_variantsCountAggregateOutputType | null
    _avg: Product_variantsAvgAggregateOutputType | null
    _sum: Product_variantsSumAggregateOutputType | null
    _min: Product_variantsMinAggregateOutputType | null
    _max: Product_variantsMaxAggregateOutputType | null
  }

  export type Product_variantsAvgAggregateOutputType = {
    id: number | null
    product_id: number | null
    price_adjustment: Decimal | null
    stock_quantity: number | null
  }

  export type Product_variantsSumAggregateOutputType = {
    id: number | null
    product_id: number | null
    price_adjustment: Decimal | null
    stock_quantity: number | null
  }

  export type Product_variantsMinAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    value: string | null
    price_adjustment: Decimal | null
    stock_quantity: number | null
    sku: string | null
    created_at: Date | null
  }

  export type Product_variantsMaxAggregateOutputType = {
    id: number | null
    product_id: number | null
    name: string | null
    value: string | null
    price_adjustment: Decimal | null
    stock_quantity: number | null
    sku: string | null
    created_at: Date | null
  }

  export type Product_variantsCountAggregateOutputType = {
    id: number
    product_id: number
    name: number
    value: number
    price_adjustment: number
    stock_quantity: number
    sku: number
    created_at: number
    _all: number
  }


  export type Product_variantsAvgAggregateInputType = {
    id?: true
    product_id?: true
    price_adjustment?: true
    stock_quantity?: true
  }

  export type Product_variantsSumAggregateInputType = {
    id?: true
    product_id?: true
    price_adjustment?: true
    stock_quantity?: true
  }

  export type Product_variantsMinAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    value?: true
    price_adjustment?: true
    stock_quantity?: true
    sku?: true
    created_at?: true
  }

  export type Product_variantsMaxAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    value?: true
    price_adjustment?: true
    stock_quantity?: true
    sku?: true
    created_at?: true
  }

  export type Product_variantsCountAggregateInputType = {
    id?: true
    product_id?: true
    name?: true
    value?: true
    price_adjustment?: true
    stock_quantity?: true
    sku?: true
    created_at?: true
    _all?: true
  }

  export type Product_variantsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_variants to aggregate.
     */
    where?: product_variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantsOrderByWithRelationInput | product_variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: product_variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned product_variants
    **/
    _count?: true | Product_variantsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Product_variantsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Product_variantsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Product_variantsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Product_variantsMaxAggregateInputType
  }

  export type GetProduct_variantsAggregateType<T extends Product_variantsAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct_variants]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct_variants[P]>
      : GetScalarType<T[P], AggregateProduct_variants[P]>
  }




  export type product_variantsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: product_variantsWhereInput
    orderBy?: product_variantsOrderByWithAggregationInput | product_variantsOrderByWithAggregationInput[]
    by: Product_variantsScalarFieldEnum[] | Product_variantsScalarFieldEnum
    having?: product_variantsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Product_variantsCountAggregateInputType | true
    _avg?: Product_variantsAvgAggregateInputType
    _sum?: Product_variantsSumAggregateInputType
    _min?: Product_variantsMinAggregateInputType
    _max?: Product_variantsMaxAggregateInputType
  }

  export type Product_variantsGroupByOutputType = {
    id: number
    product_id: number | null
    name: string
    value: string
    price_adjustment: Decimal | null
    stock_quantity: number
    sku: string | null
    created_at: Date | null
    _count: Product_variantsCountAggregateOutputType | null
    _avg: Product_variantsAvgAggregateOutputType | null
    _sum: Product_variantsSumAggregateOutputType | null
    _min: Product_variantsMinAggregateOutputType | null
    _max: Product_variantsMaxAggregateOutputType | null
  }

  type GetProduct_variantsGroupByPayload<T extends product_variantsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Product_variantsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Product_variantsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Product_variantsGroupByOutputType[P]>
            : GetScalarType<T[P], Product_variantsGroupByOutputType[P]>
        }
      >
    >


  export type product_variantsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    value?: boolean
    price_adjustment?: boolean
    stock_quantity?: boolean
    sku?: boolean
    created_at?: boolean
    cart_items?: boolean | product_variants$cart_itemsArgs<ExtArgs>
    order_items?: boolean | product_variants$order_itemsArgs<ExtArgs>
    products?: boolean | product_variants$productsArgs<ExtArgs>
    _count?: boolean | Product_variantsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product_variants"]>

  export type product_variantsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    value?: boolean
    price_adjustment?: boolean
    stock_quantity?: boolean
    sku?: boolean
    created_at?: boolean
    products?: boolean | product_variants$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_variants"]>

  export type product_variantsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    product_id?: boolean
    name?: boolean
    value?: boolean
    price_adjustment?: boolean
    stock_quantity?: boolean
    sku?: boolean
    created_at?: boolean
    products?: boolean | product_variants$productsArgs<ExtArgs>
  }, ExtArgs["result"]["product_variants"]>

  export type product_variantsSelectScalar = {
    id?: boolean
    product_id?: boolean
    name?: boolean
    value?: boolean
    price_adjustment?: boolean
    stock_quantity?: boolean
    sku?: boolean
    created_at?: boolean
  }

  export type product_variantsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "product_id" | "name" | "value" | "price_adjustment" | "stock_quantity" | "sku" | "created_at", ExtArgs["result"]["product_variants"]>
  export type product_variantsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | product_variants$cart_itemsArgs<ExtArgs>
    order_items?: boolean | product_variants$order_itemsArgs<ExtArgs>
    products?: boolean | product_variants$productsArgs<ExtArgs>
    _count?: boolean | Product_variantsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type product_variantsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_variants$productsArgs<ExtArgs>
  }
  export type product_variantsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | product_variants$productsArgs<ExtArgs>
  }

  export type $product_variantsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "product_variants"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      products: Prisma.$productsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      product_id: number | null
      name: string
      value: string
      price_adjustment: Prisma.Decimal | null
      stock_quantity: number
      sku: string | null
      created_at: Date | null
    }, ExtArgs["result"]["product_variants"]>
    composites: {}
  }

  type product_variantsGetPayload<S extends boolean | null | undefined | product_variantsDefaultArgs> = $Result.GetResult<Prisma.$product_variantsPayload, S>

  type product_variantsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<product_variantsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Product_variantsCountAggregateInputType | true
    }

  export interface product_variantsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['product_variants'], meta: { name: 'product_variants' } }
    /**
     * Find zero or one Product_variants that matches the filter.
     * @param {product_variantsFindUniqueArgs} args - Arguments to find a Product_variants
     * @example
     * // Get one Product_variants
     * const product_variants = await prisma.product_variants.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends product_variantsFindUniqueArgs>(args: SelectSubset<T, product_variantsFindUniqueArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product_variants that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {product_variantsFindUniqueOrThrowArgs} args - Arguments to find a Product_variants
     * @example
     * // Get one Product_variants
     * const product_variants = await prisma.product_variants.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends product_variantsFindUniqueOrThrowArgs>(args: SelectSubset<T, product_variantsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantsFindFirstArgs} args - Arguments to find a Product_variants
     * @example
     * // Get one Product_variants
     * const product_variants = await prisma.product_variants.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends product_variantsFindFirstArgs>(args?: SelectSubset<T, product_variantsFindFirstArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product_variants that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantsFindFirstOrThrowArgs} args - Arguments to find a Product_variants
     * @example
     * // Get one Product_variants
     * const product_variants = await prisma.product_variants.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends product_variantsFindFirstOrThrowArgs>(args?: SelectSubset<T, product_variantsFindFirstOrThrowArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Product_variants that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Product_variants
     * const product_variants = await prisma.product_variants.findMany()
     * 
     * // Get first 10 Product_variants
     * const product_variants = await prisma.product_variants.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const product_variantsWithIdOnly = await prisma.product_variants.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends product_variantsFindManyArgs>(args?: SelectSubset<T, product_variantsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product_variants.
     * @param {product_variantsCreateArgs} args - Arguments to create a Product_variants.
     * @example
     * // Create one Product_variants
     * const Product_variants = await prisma.product_variants.create({
     *   data: {
     *     // ... data to create a Product_variants
     *   }
     * })
     * 
     */
    create<T extends product_variantsCreateArgs>(args: SelectSubset<T, product_variantsCreateArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Product_variants.
     * @param {product_variantsCreateManyArgs} args - Arguments to create many Product_variants.
     * @example
     * // Create many Product_variants
     * const product_variants = await prisma.product_variants.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends product_variantsCreateManyArgs>(args?: SelectSubset<T, product_variantsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Product_variants and returns the data saved in the database.
     * @param {product_variantsCreateManyAndReturnArgs} args - Arguments to create many Product_variants.
     * @example
     * // Create many Product_variants
     * const product_variants = await prisma.product_variants.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Product_variants and only return the `id`
     * const product_variantsWithIdOnly = await prisma.product_variants.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends product_variantsCreateManyAndReturnArgs>(args?: SelectSubset<T, product_variantsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product_variants.
     * @param {product_variantsDeleteArgs} args - Arguments to delete one Product_variants.
     * @example
     * // Delete one Product_variants
     * const Product_variants = await prisma.product_variants.delete({
     *   where: {
     *     // ... filter to delete one Product_variants
     *   }
     * })
     * 
     */
    delete<T extends product_variantsDeleteArgs>(args: SelectSubset<T, product_variantsDeleteArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product_variants.
     * @param {product_variantsUpdateArgs} args - Arguments to update one Product_variants.
     * @example
     * // Update one Product_variants
     * const product_variants = await prisma.product_variants.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends product_variantsUpdateArgs>(args: SelectSubset<T, product_variantsUpdateArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Product_variants.
     * @param {product_variantsDeleteManyArgs} args - Arguments to filter Product_variants to delete.
     * @example
     * // Delete a few Product_variants
     * const { count } = await prisma.product_variants.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends product_variantsDeleteManyArgs>(args?: SelectSubset<T, product_variantsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Product_variants
     * const product_variants = await prisma.product_variants.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends product_variantsUpdateManyArgs>(args: SelectSubset<T, product_variantsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Product_variants and returns the data updated in the database.
     * @param {product_variantsUpdateManyAndReturnArgs} args - Arguments to update many Product_variants.
     * @example
     * // Update many Product_variants
     * const product_variants = await prisma.product_variants.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Product_variants and only return the `id`
     * const product_variantsWithIdOnly = await prisma.product_variants.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends product_variantsUpdateManyAndReturnArgs>(args: SelectSubset<T, product_variantsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product_variants.
     * @param {product_variantsUpsertArgs} args - Arguments to update or create a Product_variants.
     * @example
     * // Update or create a Product_variants
     * const product_variants = await prisma.product_variants.upsert({
     *   create: {
     *     // ... data to create a Product_variants
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product_variants we want to update
     *   }
     * })
     */
    upsert<T extends product_variantsUpsertArgs>(args: SelectSubset<T, product_variantsUpsertArgs<ExtArgs>>): Prisma__product_variantsClient<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Product_variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantsCountArgs} args - Arguments to filter Product_variants to count.
     * @example
     * // Count the number of Product_variants
     * const count = await prisma.product_variants.count({
     *   where: {
     *     // ... the filter for the Product_variants we want to count
     *   }
     * })
    **/
    count<T extends product_variantsCountArgs>(
      args?: Subset<T, product_variantsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Product_variantsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product_variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Product_variantsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Product_variantsAggregateArgs>(args: Subset<T, Product_variantsAggregateArgs>): Prisma.PrismaPromise<GetProduct_variantsAggregateType<T>>

    /**
     * Group by Product_variants.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {product_variantsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends product_variantsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: product_variantsGroupByArgs['orderBy'] }
        : { orderBy?: product_variantsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, product_variantsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProduct_variantsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the product_variants model
   */
  readonly fields: product_variantsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for product_variants.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__product_variantsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends product_variants$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product_variants$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends product_variants$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, product_variants$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    products<T extends product_variants$productsArgs<ExtArgs> = {}>(args?: Subset<T, product_variants$productsArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the product_variants model
   */
  interface product_variantsFieldRefs {
    readonly id: FieldRef<"product_variants", 'Int'>
    readonly product_id: FieldRef<"product_variants", 'Int'>
    readonly name: FieldRef<"product_variants", 'String'>
    readonly value: FieldRef<"product_variants", 'String'>
    readonly price_adjustment: FieldRef<"product_variants", 'Decimal'>
    readonly stock_quantity: FieldRef<"product_variants", 'Int'>
    readonly sku: FieldRef<"product_variants", 'String'>
    readonly created_at: FieldRef<"product_variants", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * product_variants findUnique
   */
  export type product_variantsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * Filter, which product_variants to fetch.
     */
    where: product_variantsWhereUniqueInput
  }

  /**
   * product_variants findUniqueOrThrow
   */
  export type product_variantsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * Filter, which product_variants to fetch.
     */
    where: product_variantsWhereUniqueInput
  }

  /**
   * product_variants findFirst
   */
  export type product_variantsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * Filter, which product_variants to fetch.
     */
    where?: product_variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantsOrderByWithRelationInput | product_variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_variants.
     */
    cursor?: product_variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_variants.
     */
    distinct?: Product_variantsScalarFieldEnum | Product_variantsScalarFieldEnum[]
  }

  /**
   * product_variants findFirstOrThrow
   */
  export type product_variantsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * Filter, which product_variants to fetch.
     */
    where?: product_variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantsOrderByWithRelationInput | product_variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for product_variants.
     */
    cursor?: product_variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of product_variants.
     */
    distinct?: Product_variantsScalarFieldEnum | Product_variantsScalarFieldEnum[]
  }

  /**
   * product_variants findMany
   */
  export type product_variantsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * Filter, which product_variants to fetch.
     */
    where?: product_variantsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of product_variants to fetch.
     */
    orderBy?: product_variantsOrderByWithRelationInput | product_variantsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing product_variants.
     */
    cursor?: product_variantsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` product_variants from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` product_variants.
     */
    skip?: number
    distinct?: Product_variantsScalarFieldEnum | Product_variantsScalarFieldEnum[]
  }

  /**
   * product_variants create
   */
  export type product_variantsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * The data needed to create a product_variants.
     */
    data: XOR<product_variantsCreateInput, product_variantsUncheckedCreateInput>
  }

  /**
   * product_variants createMany
   */
  export type product_variantsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many product_variants.
     */
    data: product_variantsCreateManyInput | product_variantsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * product_variants createManyAndReturn
   */
  export type product_variantsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * The data used to create many product_variants.
     */
    data: product_variantsCreateManyInput | product_variantsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_variants update
   */
  export type product_variantsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * The data needed to update a product_variants.
     */
    data: XOR<product_variantsUpdateInput, product_variantsUncheckedUpdateInput>
    /**
     * Choose, which product_variants to update.
     */
    where: product_variantsWhereUniqueInput
  }

  /**
   * product_variants updateMany
   */
  export type product_variantsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update product_variants.
     */
    data: XOR<product_variantsUpdateManyMutationInput, product_variantsUncheckedUpdateManyInput>
    /**
     * Filter which product_variants to update
     */
    where?: product_variantsWhereInput
    /**
     * Limit how many product_variants to update.
     */
    limit?: number
  }

  /**
   * product_variants updateManyAndReturn
   */
  export type product_variantsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * The data used to update product_variants.
     */
    data: XOR<product_variantsUpdateManyMutationInput, product_variantsUncheckedUpdateManyInput>
    /**
     * Filter which product_variants to update
     */
    where?: product_variantsWhereInput
    /**
     * Limit how many product_variants to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * product_variants upsert
   */
  export type product_variantsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * The filter to search for the product_variants to update in case it exists.
     */
    where: product_variantsWhereUniqueInput
    /**
     * In case the product_variants found by the `where` argument doesn't exist, create a new product_variants with this data.
     */
    create: XOR<product_variantsCreateInput, product_variantsUncheckedCreateInput>
    /**
     * In case the product_variants was found with the provided `where` argument, update it with this data.
     */
    update: XOR<product_variantsUpdateInput, product_variantsUncheckedUpdateInput>
  }

  /**
   * product_variants delete
   */
  export type product_variantsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    /**
     * Filter which product_variants to delete.
     */
    where: product_variantsWhereUniqueInput
  }

  /**
   * product_variants deleteMany
   */
  export type product_variantsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which product_variants to delete
     */
    where?: product_variantsWhereInput
    /**
     * Limit how many product_variants to delete.
     */
    limit?: number
  }

  /**
   * product_variants.cart_items
   */
  export type product_variants$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * product_variants.order_items
   */
  export type product_variants$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * product_variants.products
   */
  export type product_variants$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    where?: productsWhereInput
  }

  /**
   * product_variants without action
   */
  export type product_variantsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
  }


  /**
   * Model products
   */

  export type AggregateProducts = {
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  export type ProductsAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    discount_price: Decimal | null
    stock_quantity: number | null
    category_id: number | null
  }

  export type ProductsSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    discount_price: Decimal | null
    stock_quantity: number | null
    category_id: number | null
  }

  export type ProductsMinAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    price: Decimal | null
    discount_price: Decimal | null
    stock_quantity: number | null
    category_id: number | null
    is_featured: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsMaxAggregateOutputType = {
    id: number | null
    name: string | null
    slug: string | null
    description: string | null
    price: Decimal | null
    discount_price: Decimal | null
    stock_quantity: number | null
    category_id: number | null
    is_featured: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type ProductsCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    price: number
    discount_price: number
    stock_quantity: number
    category_id: number
    is_featured: number
    is_active: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type ProductsAvgAggregateInputType = {
    id?: true
    price?: true
    discount_price?: true
    stock_quantity?: true
    category_id?: true
  }

  export type ProductsSumAggregateInputType = {
    id?: true
    price?: true
    discount_price?: true
    stock_quantity?: true
    category_id?: true
  }

  export type ProductsMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    discount_price?: true
    stock_quantity?: true
    category_id?: true
    is_featured?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    discount_price?: true
    stock_quantity?: true
    category_id?: true
    is_featured?: true
    is_active?: true
    created_at?: true
    updated_at?: true
  }

  export type ProductsCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    price?: true
    discount_price?: true
    stock_quantity?: true
    category_id?: true
    is_featured?: true
    is_active?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type ProductsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to aggregate.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned products
    **/
    _count?: true | ProductsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductsMaxAggregateInputType
  }

  export type GetProductsAggregateType<T extends ProductsAggregateArgs> = {
        [P in keyof T & keyof AggregateProducts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProducts[P]>
      : GetScalarType<T[P], AggregateProducts[P]>
  }




  export type productsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: productsWhereInput
    orderBy?: productsOrderByWithAggregationInput | productsOrderByWithAggregationInput[]
    by: ProductsScalarFieldEnum[] | ProductsScalarFieldEnum
    having?: productsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductsCountAggregateInputType | true
    _avg?: ProductsAvgAggregateInputType
    _sum?: ProductsSumAggregateInputType
    _min?: ProductsMinAggregateInputType
    _max?: ProductsMaxAggregateInputType
  }

  export type ProductsGroupByOutputType = {
    id: number
    name: string
    slug: string
    description: string | null
    price: Decimal
    discount_price: Decimal | null
    stock_quantity: number
    category_id: number | null
    is_featured: boolean | null
    is_active: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: ProductsCountAggregateOutputType | null
    _avg: ProductsAvgAggregateOutputType | null
    _sum: ProductsSumAggregateOutputType | null
    _min: ProductsMinAggregateOutputType | null
    _max: ProductsMaxAggregateOutputType | null
  }

  type GetProductsGroupByPayload<T extends productsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductsGroupByOutputType[P]>
            : GetScalarType<T[P], ProductsGroupByOutputType[P]>
        }
      >
    >


  export type productsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    discount_price?: boolean
    stock_quantity?: boolean
    category_id?: boolean
    is_featured?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    product_reviews?: boolean | products$product_reviewsArgs<ExtArgs>
    product_variants?: boolean | products$product_variantsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    discount_price?: boolean
    stock_quantity?: boolean
    category_id?: boolean
    is_featured?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    discount_price?: boolean
    stock_quantity?: boolean
    category_id?: boolean
    is_featured?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }, ExtArgs["result"]["products"]>

  export type productsSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    price?: boolean
    discount_price?: boolean
    stock_quantity?: boolean
    category_id?: boolean
    is_featured?: boolean
    is_active?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type productsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "price" | "discount_price" | "stock_quantity" | "category_id" | "is_featured" | "is_active" | "created_at" | "updated_at", ExtArgs["result"]["products"]>
  export type productsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    cart_items?: boolean | products$cart_itemsArgs<ExtArgs>
    order_items?: boolean | products$order_itemsArgs<ExtArgs>
    product_images?: boolean | products$product_imagesArgs<ExtArgs>
    product_reviews?: boolean | products$product_reviewsArgs<ExtArgs>
    product_variants?: boolean | products$product_variantsArgs<ExtArgs>
    categories?: boolean | products$categoriesArgs<ExtArgs>
    _count?: boolean | ProductsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type productsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }
  export type productsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | products$categoriesArgs<ExtArgs>
  }

  export type $productsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "products"
    objects: {
      cart_items: Prisma.$cart_itemsPayload<ExtArgs>[]
      order_items: Prisma.$order_itemsPayload<ExtArgs>[]
      product_images: Prisma.$product_imagesPayload<ExtArgs>[]
      product_reviews: Prisma.$product_reviewsPayload<ExtArgs>[]
      product_variants: Prisma.$product_variantsPayload<ExtArgs>[]
      categories: Prisma.$categoriesPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      slug: string
      description: string | null
      price: Prisma.Decimal
      discount_price: Prisma.Decimal | null
      stock_quantity: number
      category_id: number | null
      is_featured: boolean | null
      is_active: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["products"]>
    composites: {}
  }

  type productsGetPayload<S extends boolean | null | undefined | productsDefaultArgs> = $Result.GetResult<Prisma.$productsPayload, S>

  type productsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<productsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductsCountAggregateInputType | true
    }

  export interface productsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['products'], meta: { name: 'products' } }
    /**
     * Find zero or one Products that matches the filter.
     * @param {productsFindUniqueArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends productsFindUniqueArgs>(args: SelectSubset<T, productsFindUniqueArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Products that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {productsFindUniqueOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends productsFindUniqueOrThrowArgs>(args: SelectSubset<T, productsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends productsFindFirstArgs>(args?: SelectSubset<T, productsFindFirstArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Products that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindFirstOrThrowArgs} args - Arguments to find a Products
     * @example
     * // Get one Products
     * const products = await prisma.products.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends productsFindFirstOrThrowArgs>(args?: SelectSubset<T, productsFindFirstOrThrowArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.products.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.products.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productsWithIdOnly = await prisma.products.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends productsFindManyArgs>(args?: SelectSubset<T, productsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Products.
     * @param {productsCreateArgs} args - Arguments to create a Products.
     * @example
     * // Create one Products
     * const Products = await prisma.products.create({
     *   data: {
     *     // ... data to create a Products
     *   }
     * })
     * 
     */
    create<T extends productsCreateArgs>(args: SelectSubset<T, productsCreateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {productsCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends productsCreateManyArgs>(args?: SelectSubset<T, productsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {productsCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const products = await prisma.products.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends productsCreateManyAndReturnArgs>(args?: SelectSubset<T, productsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Products.
     * @param {productsDeleteArgs} args - Arguments to delete one Products.
     * @example
     * // Delete one Products
     * const Products = await prisma.products.delete({
     *   where: {
     *     // ... filter to delete one Products
     *   }
     * })
     * 
     */
    delete<T extends productsDeleteArgs>(args: SelectSubset<T, productsDeleteArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Products.
     * @param {productsUpdateArgs} args - Arguments to update one Products.
     * @example
     * // Update one Products
     * const products = await prisma.products.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends productsUpdateArgs>(args: SelectSubset<T, productsUpdateArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {productsDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.products.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends productsDeleteManyArgs>(args?: SelectSubset<T, productsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends productsUpdateManyArgs>(args: SelectSubset<T, productsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {productsUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const products = await prisma.products.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productsWithIdOnly = await prisma.products.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends productsUpdateManyAndReturnArgs>(args: SelectSubset<T, productsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Products.
     * @param {productsUpsertArgs} args - Arguments to update or create a Products.
     * @example
     * // Update or create a Products
     * const products = await prisma.products.upsert({
     *   create: {
     *     // ... data to create a Products
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Products we want to update
     *   }
     * })
     */
    upsert<T extends productsUpsertArgs>(args: SelectSubset<T, productsUpsertArgs<ExtArgs>>): Prisma__productsClient<$Result.GetResult<Prisma.$productsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.products.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends productsCountArgs>(
      args?: Subset<T, productsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProductsAggregateArgs>(args: Subset<T, ProductsAggregateArgs>): Prisma.PrismaPromise<GetProductsAggregateType<T>>

    /**
     * Group by Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {productsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends productsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: productsGroupByArgs['orderBy'] }
        : { orderBy?: productsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, productsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the products model
   */
  readonly fields: productsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for products.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__productsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    cart_items<T extends products$cart_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$cart_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cart_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    order_items<T extends products$order_itemsArgs<ExtArgs> = {}>(args?: Subset<T, products$order_itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$order_itemsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_images<T extends products$product_imagesArgs<ExtArgs> = {}>(args?: Subset<T, products$product_imagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_imagesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_reviews<T extends products$product_reviewsArgs<ExtArgs> = {}>(args?: Subset<T, products$product_reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_variants<T extends products$product_variantsArgs<ExtArgs> = {}>(args?: Subset<T, products$product_variantsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_variantsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    categories<T extends products$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, products$categoriesArgs<ExtArgs>>): Prisma__categoriesClient<$Result.GetResult<Prisma.$categoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the products model
   */
  interface productsFieldRefs {
    readonly id: FieldRef<"products", 'Int'>
    readonly name: FieldRef<"products", 'String'>
    readonly slug: FieldRef<"products", 'String'>
    readonly description: FieldRef<"products", 'String'>
    readonly price: FieldRef<"products", 'Decimal'>
    readonly discount_price: FieldRef<"products", 'Decimal'>
    readonly stock_quantity: FieldRef<"products", 'Int'>
    readonly category_id: FieldRef<"products", 'Int'>
    readonly is_featured: FieldRef<"products", 'Boolean'>
    readonly is_active: FieldRef<"products", 'Boolean'>
    readonly created_at: FieldRef<"products", 'DateTime'>
    readonly updated_at: FieldRef<"products", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * products findUnique
   */
  export type productsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findUniqueOrThrow
   */
  export type productsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products findFirst
   */
  export type productsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findFirstOrThrow
   */
  export type productsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of products.
     */
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products findMany
   */
  export type productsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter, which products to fetch.
     */
    where?: productsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of products to fetch.
     */
    orderBy?: productsOrderByWithRelationInput | productsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing products.
     */
    cursor?: productsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` products.
     */
    skip?: number
    distinct?: ProductsScalarFieldEnum | ProductsScalarFieldEnum[]
  }

  /**
   * products create
   */
  export type productsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to create a products.
     */
    data: XOR<productsCreateInput, productsUncheckedCreateInput>
  }

  /**
   * products createMany
   */
  export type productsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * products createManyAndReturn
   */
  export type productsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to create many products.
     */
    data: productsCreateManyInput | productsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * products update
   */
  export type productsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The data needed to update a products.
     */
    data: XOR<productsUpdateInput, productsUncheckedUpdateInput>
    /**
     * Choose, which products to update.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products updateMany
   */
  export type productsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
  }

  /**
   * products updateManyAndReturn
   */
  export type productsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * The data used to update products.
     */
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyInput>
    /**
     * Filter which products to update
     */
    where?: productsWhereInput
    /**
     * Limit how many products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * products upsert
   */
  export type productsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * The filter to search for the products to update in case it exists.
     */
    where: productsWhereUniqueInput
    /**
     * In case the products found by the `where` argument doesn't exist, create a new products with this data.
     */
    create: XOR<productsCreateInput, productsUncheckedCreateInput>
    /**
     * In case the products was found with the provided `where` argument, update it with this data.
     */
    update: XOR<productsUpdateInput, productsUncheckedUpdateInput>
  }

  /**
   * products delete
   */
  export type productsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
    /**
     * Filter which products to delete.
     */
    where: productsWhereUniqueInput
  }

  /**
   * products deleteMany
   */
  export type productsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which products to delete
     */
    where?: productsWhereInput
    /**
     * Limit how many products to delete.
     */
    limit?: number
  }

  /**
   * products.cart_items
   */
  export type products$cart_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the cart_items
     */
    select?: cart_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the cart_items
     */
    omit?: cart_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cart_itemsInclude<ExtArgs> | null
    where?: cart_itemsWhereInput
    orderBy?: cart_itemsOrderByWithRelationInput | cart_itemsOrderByWithRelationInput[]
    cursor?: cart_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Cart_itemsScalarFieldEnum | Cart_itemsScalarFieldEnum[]
  }

  /**
   * products.order_items
   */
  export type products$order_itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the order_items
     */
    select?: order_itemsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the order_items
     */
    omit?: order_itemsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: order_itemsInclude<ExtArgs> | null
    where?: order_itemsWhereInput
    orderBy?: order_itemsOrderByWithRelationInput | order_itemsOrderByWithRelationInput[]
    cursor?: order_itemsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Order_itemsScalarFieldEnum | Order_itemsScalarFieldEnum[]
  }

  /**
   * products.product_images
   */
  export type products$product_imagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_images
     */
    select?: product_imagesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_images
     */
    omit?: product_imagesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_imagesInclude<ExtArgs> | null
    where?: product_imagesWhereInput
    orderBy?: product_imagesOrderByWithRelationInput | product_imagesOrderByWithRelationInput[]
    cursor?: product_imagesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_imagesScalarFieldEnum | Product_imagesScalarFieldEnum[]
  }

  /**
   * products.product_reviews
   */
  export type products$product_reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    where?: product_reviewsWhereInput
    orderBy?: product_reviewsOrderByWithRelationInput | product_reviewsOrderByWithRelationInput[]
    cursor?: product_reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_reviewsScalarFieldEnum | Product_reviewsScalarFieldEnum[]
  }

  /**
   * products.product_variants
   */
  export type products$product_variantsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_variants
     */
    select?: product_variantsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_variants
     */
    omit?: product_variantsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_variantsInclude<ExtArgs> | null
    where?: product_variantsWhereInput
    orderBy?: product_variantsOrderByWithRelationInput | product_variantsOrderByWithRelationInput[]
    cursor?: product_variantsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_variantsScalarFieldEnum | Product_variantsScalarFieldEnum[]
  }

  /**
   * products.categories
   */
  export type products$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the categories
     */
    select?: categoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the categories
     */
    omit?: categoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: categoriesInclude<ExtArgs> | null
    where?: categoriesWhereInput
  }

  /**
   * products without action
   */
  export type productsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the products
     */
    select?: productsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the products
     */
    omit?: productsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: productsInclude<ExtArgs> | null
  }


  /**
   * Model users
   */

  export type AggregateUsers = {
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  export type UsersAvgAggregateOutputType = {
    id: number | null
  }

  export type UsersSumAggregateOutputType = {
    id: number | null
  }

  export type UsersMinAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersMaxAggregateOutputType = {
    id: number | null
    email: string | null
    password_hash: string | null
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
  }

  export type UsersCountAggregateOutputType = {
    id: number
    email: number
    password_hash: number
    first_name: number
    last_name: number
    phone: number
    is_admin: number
    created_at: number
    updated_at: number
    _all: number
  }


  export type UsersAvgAggregateInputType = {
    id?: true
  }

  export type UsersSumAggregateInputType = {
    id?: true
  }

  export type UsersMinAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersMaxAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
  }

  export type UsersCountAggregateInputType = {
    id?: true
    email?: true
    password_hash?: true
    first_name?: true
    last_name?: true
    phone?: true
    is_admin?: true
    created_at?: true
    updated_at?: true
    _all?: true
  }

  export type UsersAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to aggregate.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned users
    **/
    _count?: true | UsersCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UsersAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UsersSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UsersMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UsersMaxAggregateInputType
  }

  export type GetUsersAggregateType<T extends UsersAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers[P]>
      : GetScalarType<T[P], AggregateUsers[P]>
  }




  export type usersGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: usersWhereInput
    orderBy?: usersOrderByWithAggregationInput | usersOrderByWithAggregationInput[]
    by: UsersScalarFieldEnum[] | UsersScalarFieldEnum
    having?: usersScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UsersCountAggregateInputType | true
    _avg?: UsersAvgAggregateInputType
    _sum?: UsersSumAggregateInputType
    _min?: UsersMinAggregateInputType
    _max?: UsersMaxAggregateInputType
  }

  export type UsersGroupByOutputType = {
    id: number
    email: string
    password_hash: string
    first_name: string | null
    last_name: string | null
    phone: string | null
    is_admin: boolean | null
    created_at: Date | null
    updated_at: Date | null
    _count: UsersCountAggregateOutputType | null
    _avg: UsersAvgAggregateOutputType | null
    _sum: UsersSumAggregateOutputType | null
    _min: UsersMinAggregateOutputType | null
    _max: UsersMaxAggregateOutputType | null
  }

  type GetUsersGroupByPayload<T extends usersGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UsersGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UsersGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UsersGroupByOutputType[P]>
            : GetScalarType<T[P], UsersGroupByOutputType[P]>
        }
      >
    >


  export type usersSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
    addresses?: boolean | users$addressesArgs<ExtArgs>
    carts?: boolean | users$cartsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    product_reviews?: boolean | users$product_reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users"]>

  export type usersSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }, ExtArgs["result"]["users"]>

  export type usersSelectScalar = {
    id?: boolean
    email?: boolean
    password_hash?: boolean
    first_name?: boolean
    last_name?: boolean
    phone?: boolean
    is_admin?: boolean
    created_at?: boolean
    updated_at?: boolean
  }

  export type usersOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "password_hash" | "first_name" | "last_name" | "phone" | "is_admin" | "created_at" | "updated_at", ExtArgs["result"]["users"]>
  export type usersInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    addresses?: boolean | users$addressesArgs<ExtArgs>
    carts?: boolean | users$cartsArgs<ExtArgs>
    orders?: boolean | users$ordersArgs<ExtArgs>
    product_reviews?: boolean | users$product_reviewsArgs<ExtArgs>
    _count?: boolean | UsersCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type usersIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type usersIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $usersPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "users"
    objects: {
      addresses: Prisma.$addressesPayload<ExtArgs>[]
      carts: Prisma.$cartsPayload<ExtArgs>[]
      orders: Prisma.$ordersPayload<ExtArgs>[]
      product_reviews: Prisma.$product_reviewsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      email: string
      password_hash: string
      first_name: string | null
      last_name: string | null
      phone: string | null
      is_admin: boolean | null
      created_at: Date | null
      updated_at: Date | null
    }, ExtArgs["result"]["users"]>
    composites: {}
  }

  type usersGetPayload<S extends boolean | null | undefined | usersDefaultArgs> = $Result.GetResult<Prisma.$usersPayload, S>

  type usersCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<usersFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UsersCountAggregateInputType | true
    }

  export interface usersDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['users'], meta: { name: 'users' } }
    /**
     * Find zero or one Users that matches the filter.
     * @param {usersFindUniqueArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends usersFindUniqueArgs>(args: SelectSubset<T, usersFindUniqueArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {usersFindUniqueOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends usersFindUniqueOrThrowArgs>(args: SelectSubset<T, usersFindUniqueOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends usersFindFirstArgs>(args?: SelectSubset<T, usersFindFirstArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindFirstOrThrowArgs} args - Arguments to find a Users
     * @example
     * // Get one Users
     * const users = await prisma.users.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends usersFindFirstOrThrowArgs>(args?: SelectSubset<T, usersFindFirstOrThrowArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.users.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.users.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const usersWithIdOnly = await prisma.users.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends usersFindManyArgs>(args?: SelectSubset<T, usersFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users.
     * @param {usersCreateArgs} args - Arguments to create a Users.
     * @example
     * // Create one Users
     * const Users = await prisma.users.create({
     *   data: {
     *     // ... data to create a Users
     *   }
     * })
     * 
     */
    create<T extends usersCreateArgs>(args: SelectSubset<T, usersCreateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {usersCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends usersCreateManyArgs>(args?: SelectSubset<T, usersCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {usersCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const users = await prisma.users.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends usersCreateManyAndReturnArgs>(args?: SelectSubset<T, usersCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users.
     * @param {usersDeleteArgs} args - Arguments to delete one Users.
     * @example
     * // Delete one Users
     * const Users = await prisma.users.delete({
     *   where: {
     *     // ... filter to delete one Users
     *   }
     * })
     * 
     */
    delete<T extends usersDeleteArgs>(args: SelectSubset<T, usersDeleteArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users.
     * @param {usersUpdateArgs} args - Arguments to update one Users.
     * @example
     * // Update one Users
     * const users = await prisma.users.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends usersUpdateArgs>(args: SelectSubset<T, usersUpdateArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {usersDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.users.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends usersDeleteManyArgs>(args?: SelectSubset<T, usersDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends usersUpdateManyArgs>(args: SelectSubset<T, usersUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {usersUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const users = await prisma.users.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const usersWithIdOnly = await prisma.users.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends usersUpdateManyAndReturnArgs>(args: SelectSubset<T, usersUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users.
     * @param {usersUpsertArgs} args - Arguments to update or create a Users.
     * @example
     * // Update or create a Users
     * const users = await prisma.users.upsert({
     *   create: {
     *     // ... data to create a Users
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users we want to update
     *   }
     * })
     */
    upsert<T extends usersUpsertArgs>(args: SelectSubset<T, usersUpsertArgs<ExtArgs>>): Prisma__usersClient<$Result.GetResult<Prisma.$usersPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.users.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends usersCountArgs>(
      args?: Subset<T, usersCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UsersCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UsersAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UsersAggregateArgs>(args: Subset<T, UsersAggregateArgs>): Prisma.PrismaPromise<GetUsersAggregateType<T>>

    /**
     * Group by Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {usersGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends usersGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: usersGroupByArgs['orderBy'] }
        : { orderBy?: usersGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, usersGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsersGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the users model
   */
  readonly fields: usersFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for users.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__usersClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    addresses<T extends users$addressesArgs<ExtArgs> = {}>(args?: Subset<T, users$addressesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$addressesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    carts<T extends users$cartsArgs<ExtArgs> = {}>(args?: Subset<T, users$cartsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$cartsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    orders<T extends users$ordersArgs<ExtArgs> = {}>(args?: Subset<T, users$ordersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ordersPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    product_reviews<T extends users$product_reviewsArgs<ExtArgs> = {}>(args?: Subset<T, users$product_reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$product_reviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the users model
   */
  interface usersFieldRefs {
    readonly id: FieldRef<"users", 'Int'>
    readonly email: FieldRef<"users", 'String'>
    readonly password_hash: FieldRef<"users", 'String'>
    readonly first_name: FieldRef<"users", 'String'>
    readonly last_name: FieldRef<"users", 'String'>
    readonly phone: FieldRef<"users", 'String'>
    readonly is_admin: FieldRef<"users", 'Boolean'>
    readonly created_at: FieldRef<"users", 'DateTime'>
    readonly updated_at: FieldRef<"users", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * users findUnique
   */
  export type usersFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findUniqueOrThrow
   */
  export type usersFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users findFirst
   */
  export type usersFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findFirstOrThrow
   */
  export type usersFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of users.
     */
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users findMany
   */
  export type usersFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter, which users to fetch.
     */
    where?: usersWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of users to fetch.
     */
    orderBy?: usersOrderByWithRelationInput | usersOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing users.
     */
    cursor?: usersWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` users.
     */
    skip?: number
    distinct?: UsersScalarFieldEnum | UsersScalarFieldEnum[]
  }

  /**
   * users create
   */
  export type usersCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to create a users.
     */
    data: XOR<usersCreateInput, usersUncheckedCreateInput>
  }

  /**
   * users createMany
   */
  export type usersCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users createManyAndReturn
   */
  export type usersCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to create many users.
     */
    data: usersCreateManyInput | usersCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * users update
   */
  export type usersUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The data needed to update a users.
     */
    data: XOR<usersUpdateInput, usersUncheckedUpdateInput>
    /**
     * Choose, which users to update.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users updateMany
   */
  export type usersUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users updateManyAndReturn
   */
  export type usersUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * The data used to update users.
     */
    data: XOR<usersUpdateManyMutationInput, usersUncheckedUpdateManyInput>
    /**
     * Filter which users to update
     */
    where?: usersWhereInput
    /**
     * Limit how many users to update.
     */
    limit?: number
  }

  /**
   * users upsert
   */
  export type usersUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * The filter to search for the users to update in case it exists.
     */
    where: usersWhereUniqueInput
    /**
     * In case the users found by the `where` argument doesn't exist, create a new users with this data.
     */
    create: XOR<usersCreateInput, usersUncheckedCreateInput>
    /**
     * In case the users was found with the provided `where` argument, update it with this data.
     */
    update: XOR<usersUpdateInput, usersUncheckedUpdateInput>
  }

  /**
   * users delete
   */
  export type usersDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
    /**
     * Filter which users to delete.
     */
    where: usersWhereUniqueInput
  }

  /**
   * users deleteMany
   */
  export type usersDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which users to delete
     */
    where?: usersWhereInput
    /**
     * Limit how many users to delete.
     */
    limit?: number
  }

  /**
   * users.addresses
   */
  export type users$addressesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the addresses
     */
    select?: addressesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the addresses
     */
    omit?: addressesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: addressesInclude<ExtArgs> | null
    where?: addressesWhereInput
    orderBy?: addressesOrderByWithRelationInput | addressesOrderByWithRelationInput[]
    cursor?: addressesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AddressesScalarFieldEnum | AddressesScalarFieldEnum[]
  }

  /**
   * users.carts
   */
  export type users$cartsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the carts
     */
    select?: cartsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the carts
     */
    omit?: cartsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: cartsInclude<ExtArgs> | null
    where?: cartsWhereInput
    orderBy?: cartsOrderByWithRelationInput | cartsOrderByWithRelationInput[]
    cursor?: cartsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CartsScalarFieldEnum | CartsScalarFieldEnum[]
  }

  /**
   * users.orders
   */
  export type users$ordersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the orders
     */
    select?: ordersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the orders
     */
    omit?: ordersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ordersInclude<ExtArgs> | null
    where?: ordersWhereInput
    orderBy?: ordersOrderByWithRelationInput | ordersOrderByWithRelationInput[]
    cursor?: ordersWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrdersScalarFieldEnum | OrdersScalarFieldEnum[]
  }

  /**
   * users.product_reviews
   */
  export type users$product_reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the product_reviews
     */
    select?: product_reviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the product_reviews
     */
    omit?: product_reviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: product_reviewsInclude<ExtArgs> | null
    where?: product_reviewsWhereInput
    orderBy?: product_reviewsOrderByWithRelationInput | product_reviewsOrderByWithRelationInput[]
    cursor?: product_reviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Product_reviewsScalarFieldEnum | Product_reviewsScalarFieldEnum[]
  }

  /**
   * users without action
   */
  export type usersDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the users
     */
    select?: usersSelect<ExtArgs> | null
    /**
     * Omit specific fields from the users
     */
    omit?: usersOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: usersInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const AddressesScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    street: 'street',
    city: 'city',
    state: 'state',
    country: 'country',
    postal_code: 'postal_code',
    is_default: 'is_default',
    created_at: 'created_at'
  };

  export type AddressesScalarFieldEnum = (typeof AddressesScalarFieldEnum)[keyof typeof AddressesScalarFieldEnum]


  export const Cart_itemsScalarFieldEnum: {
    id: 'id',
    cart_id: 'cart_id',
    product_id: 'product_id',
    variant_id: 'variant_id',
    quantity: 'quantity',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type Cart_itemsScalarFieldEnum = (typeof Cart_itemsScalarFieldEnum)[keyof typeof Cart_itemsScalarFieldEnum]


  export const CartsScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type CartsScalarFieldEnum = (typeof CartsScalarFieldEnum)[keyof typeof CartsScalarFieldEnum]


  export const CategoriesScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    parent_id: 'parent_id',
    created_at: 'created_at'
  };

  export type CategoriesScalarFieldEnum = (typeof CategoriesScalarFieldEnum)[keyof typeof CategoriesScalarFieldEnum]


  export const Order_itemsScalarFieldEnum: {
    id: 'id',
    order_id: 'order_id',
    product_id: 'product_id',
    variant_id: 'variant_id',
    product_name: 'product_name',
    variant_description: 'variant_description',
    price: 'price',
    quantity: 'quantity',
    total_price: 'total_price',
    created_at: 'created_at'
  };

  export type Order_itemsScalarFieldEnum = (typeof Order_itemsScalarFieldEnum)[keyof typeof Order_itemsScalarFieldEnum]


  export const OrdersScalarFieldEnum: {
    id: 'id',
    user_id: 'user_id',
    order_number: 'order_number',
    status: 'status',
    total_amount: 'total_amount',
    shipping_address_id: 'shipping_address_id',
    billing_address_id: 'billing_address_id',
    payment_method: 'payment_method',
    payment_status: 'payment_status',
    tracking_number: 'tracking_number',
    notes: 'notes',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type OrdersScalarFieldEnum = (typeof OrdersScalarFieldEnum)[keyof typeof OrdersScalarFieldEnum]


  export const Product_imagesScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    url: 'url',
    alt_text: 'alt_text',
    is_primary: 'is_primary',
    created_at: 'created_at'
  };

  export type Product_imagesScalarFieldEnum = (typeof Product_imagesScalarFieldEnum)[keyof typeof Product_imagesScalarFieldEnum]


  export const Product_reviewsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    user_id: 'user_id',
    rating: 'rating',
    comment: 'comment',
    is_approved: 'is_approved',
    created_at: 'created_at'
  };

  export type Product_reviewsScalarFieldEnum = (typeof Product_reviewsScalarFieldEnum)[keyof typeof Product_reviewsScalarFieldEnum]


  export const Product_variantsScalarFieldEnum: {
    id: 'id',
    product_id: 'product_id',
    name: 'name',
    value: 'value',
    price_adjustment: 'price_adjustment',
    stock_quantity: 'stock_quantity',
    sku: 'sku',
    created_at: 'created_at'
  };

  export type Product_variantsScalarFieldEnum = (typeof Product_variantsScalarFieldEnum)[keyof typeof Product_variantsScalarFieldEnum]


  export const ProductsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    price: 'price',
    discount_price: 'discount_price',
    stock_quantity: 'stock_quantity',
    category_id: 'category_id',
    is_featured: 'is_featured',
    is_active: 'is_active',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type ProductsScalarFieldEnum = (typeof ProductsScalarFieldEnum)[keyof typeof ProductsScalarFieldEnum]


  export const UsersScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password_hash: 'password_hash',
    first_name: 'first_name',
    last_name: 'last_name',
    phone: 'phone',
    is_admin: 'is_admin',
    created_at: 'created_at',
    updated_at: 'updated_at'
  };

  export type UsersScalarFieldEnum = (typeof UsersScalarFieldEnum)[keyof typeof UsersScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type addressesWhereInput = {
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    id?: IntFilter<"addresses"> | number
    user_id?: IntNullableFilter<"addresses"> | number | null
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    state?: StringNullableFilter<"addresses"> | string | null
    country?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    is_default?: BoolNullableFilter<"addresses"> | boolean | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    orders_orders_billing_address_idToaddresses?: OrdersListRelationFilter
    orders_orders_shipping_address_idToaddresses?: OrdersListRelationFilter
  }

  export type addressesOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    users?: usersOrderByWithRelationInput
    orders_orders_billing_address_idToaddresses?: ordersOrderByRelationAggregateInput
    orders_orders_shipping_address_idToaddresses?: ordersOrderByRelationAggregateInput
  }

  export type addressesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: addressesWhereInput | addressesWhereInput[]
    OR?: addressesWhereInput[]
    NOT?: addressesWhereInput | addressesWhereInput[]
    user_id?: IntNullableFilter<"addresses"> | number | null
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    state?: StringNullableFilter<"addresses"> | string | null
    country?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    is_default?: BoolNullableFilter<"addresses"> | boolean | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
    orders_orders_billing_address_idToaddresses?: OrdersListRelationFilter
    orders_orders_shipping_address_idToaddresses?: OrdersListRelationFilter
  }, "id">

  export type addressesOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrderInput | SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: addressesCountOrderByAggregateInput
    _avg?: addressesAvgOrderByAggregateInput
    _max?: addressesMaxOrderByAggregateInput
    _min?: addressesMinOrderByAggregateInput
    _sum?: addressesSumOrderByAggregateInput
  }

  export type addressesScalarWhereWithAggregatesInput = {
    AND?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    OR?: addressesScalarWhereWithAggregatesInput[]
    NOT?: addressesScalarWhereWithAggregatesInput | addressesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"addresses"> | number
    user_id?: IntNullableWithAggregatesFilter<"addresses"> | number | null
    street?: StringWithAggregatesFilter<"addresses"> | string
    city?: StringWithAggregatesFilter<"addresses"> | string
    state?: StringNullableWithAggregatesFilter<"addresses"> | string | null
    country?: StringWithAggregatesFilter<"addresses"> | string
    postal_code?: StringWithAggregatesFilter<"addresses"> | string
    is_default?: BoolNullableWithAggregatesFilter<"addresses"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"addresses"> | Date | string | null
  }

  export type cart_itemsWhereInput = {
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    id?: IntFilter<"cart_items"> | number
    cart_id?: IntNullableFilter<"cart_items"> | number | null
    product_id?: IntNullableFilter<"cart_items"> | number | null
    variant_id?: IntNullableFilter<"cart_items"> | number | null
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeNullableFilter<"cart_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cart_items"> | Date | string | null
    carts?: XOR<CartsNullableScalarRelationFilter, cartsWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    product_variants?: XOR<Product_variantsNullableScalarRelationFilter, product_variantsWhereInput> | null
  }

  export type cart_itemsOrderByWithRelationInput = {
    id?: SortOrder
    cart_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    variant_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    carts?: cartsOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
    product_variants?: product_variantsOrderByWithRelationInput
  }

  export type cart_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cart_itemsWhereInput | cart_itemsWhereInput[]
    OR?: cart_itemsWhereInput[]
    NOT?: cart_itemsWhereInput | cart_itemsWhereInput[]
    cart_id?: IntNullableFilter<"cart_items"> | number | null
    product_id?: IntNullableFilter<"cart_items"> | number | null
    variant_id?: IntNullableFilter<"cart_items"> | number | null
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeNullableFilter<"cart_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cart_items"> | Date | string | null
    carts?: XOR<CartsNullableScalarRelationFilter, cartsWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    product_variants?: XOR<Product_variantsNullableScalarRelationFilter, product_variantsWhereInput> | null
  }, "id">

  export type cart_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    cart_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    variant_id?: SortOrderInput | SortOrder
    quantity?: SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: cart_itemsCountOrderByAggregateInput
    _avg?: cart_itemsAvgOrderByAggregateInput
    _max?: cart_itemsMaxOrderByAggregateInput
    _min?: cart_itemsMinOrderByAggregateInput
    _sum?: cart_itemsSumOrderByAggregateInput
  }

  export type cart_itemsScalarWhereWithAggregatesInput = {
    AND?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    OR?: cart_itemsScalarWhereWithAggregatesInput[]
    NOT?: cart_itemsScalarWhereWithAggregatesInput | cart_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"cart_items"> | number
    cart_id?: IntNullableWithAggregatesFilter<"cart_items"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"cart_items"> | number | null
    variant_id?: IntNullableWithAggregatesFilter<"cart_items"> | number | null
    quantity?: IntWithAggregatesFilter<"cart_items"> | number
    created_at?: DateTimeNullableWithAggregatesFilter<"cart_items"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"cart_items"> | Date | string | null
  }

  export type cartsWhereInput = {
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntNullableFilter<"carts"> | number | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type cartsOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    users?: usersOrderByWithRelationInput
  }

  export type cartsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: cartsWhereInput | cartsWhereInput[]
    OR?: cartsWhereInput[]
    NOT?: cartsWhereInput | cartsWhereInput[]
    user_id?: IntNullableFilter<"carts"> | number | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type cartsOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: cartsCountOrderByAggregateInput
    _avg?: cartsAvgOrderByAggregateInput
    _max?: cartsMaxOrderByAggregateInput
    _min?: cartsMinOrderByAggregateInput
    _sum?: cartsSumOrderByAggregateInput
  }

  export type cartsScalarWhereWithAggregatesInput = {
    AND?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    OR?: cartsScalarWhereWithAggregatesInput[]
    NOT?: cartsScalarWhereWithAggregatesInput | cartsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"carts"> | number
    user_id?: IntNullableWithAggregatesFilter<"carts"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"carts"> | Date | string | null
  }

  export type categoriesWhereInput = {
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    slug?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    parent_id?: IntNullableFilter<"categories"> | number | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    other_categories?: CategoriesListRelationFilter
    products?: ProductsListRelationFilter
  }

  export type categoriesOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    categories?: categoriesOrderByWithRelationInput
    other_categories?: categoriesOrderByRelationAggregateInput
    products?: productsOrderByRelationAggregateInput
  }

  export type categoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: categoriesWhereInput | categoriesWhereInput[]
    OR?: categoriesWhereInput[]
    NOT?: categoriesWhereInput | categoriesWhereInput[]
    name?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    parent_id?: IntNullableFilter<"categories"> | number | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
    other_categories?: CategoriesListRelationFilter
    products?: ProductsListRelationFilter
  }, "id" | "slug">

  export type categoriesOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    parent_id?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: categoriesCountOrderByAggregateInput
    _avg?: categoriesAvgOrderByAggregateInput
    _max?: categoriesMaxOrderByAggregateInput
    _min?: categoriesMinOrderByAggregateInput
    _sum?: categoriesSumOrderByAggregateInput
  }

  export type categoriesScalarWhereWithAggregatesInput = {
    AND?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    OR?: categoriesScalarWhereWithAggregatesInput[]
    NOT?: categoriesScalarWhereWithAggregatesInput | categoriesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"categories"> | number
    name?: StringWithAggregatesFilter<"categories"> | string
    slug?: StringWithAggregatesFilter<"categories"> | string
    description?: StringNullableWithAggregatesFilter<"categories"> | string | null
    parent_id?: IntNullableWithAggregatesFilter<"categories"> | number | null
    created_at?: DateTimeNullableWithAggregatesFilter<"categories"> | Date | string | null
  }

  export type order_itemsWhereInput = {
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    variant_id?: IntNullableFilter<"order_items"> | number | null
    product_name?: StringFilter<"order_items"> | string
    variant_description?: StringNullableFilter<"order_items"> | string | null
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"order_items"> | number
    total_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_items"> | Date | string | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    product_variants?: XOR<Product_variantsNullableScalarRelationFilter, product_variantsWhereInput> | null
  }

  export type order_itemsOrderByWithRelationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    variant_id?: SortOrderInput | SortOrder
    product_name?: SortOrder
    variant_description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrderInput | SortOrder
    orders?: ordersOrderByWithRelationInput
    products?: productsOrderByWithRelationInput
    product_variants?: product_variantsOrderByWithRelationInput
  }

  export type order_itemsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: order_itemsWhereInput | order_itemsWhereInput[]
    OR?: order_itemsWhereInput[]
    NOT?: order_itemsWhereInput | order_itemsWhereInput[]
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    variant_id?: IntNullableFilter<"order_items"> | number | null
    product_name?: StringFilter<"order_items"> | string
    variant_description?: StringNullableFilter<"order_items"> | string | null
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"order_items"> | number
    total_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_items"> | Date | string | null
    orders?: XOR<OrdersNullableScalarRelationFilter, ordersWhereInput> | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    product_variants?: XOR<Product_variantsNullableScalarRelationFilter, product_variantsWhereInput> | null
  }, "id">

  export type order_itemsOrderByWithAggregationInput = {
    id?: SortOrder
    order_id?: SortOrderInput | SortOrder
    product_id?: SortOrderInput | SortOrder
    variant_id?: SortOrderInput | SortOrder
    product_name?: SortOrder
    variant_description?: SortOrderInput | SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: order_itemsCountOrderByAggregateInput
    _avg?: order_itemsAvgOrderByAggregateInput
    _max?: order_itemsMaxOrderByAggregateInput
    _min?: order_itemsMinOrderByAggregateInput
    _sum?: order_itemsSumOrderByAggregateInput
  }

  export type order_itemsScalarWhereWithAggregatesInput = {
    AND?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    OR?: order_itemsScalarWhereWithAggregatesInput[]
    NOT?: order_itemsScalarWhereWithAggregatesInput | order_itemsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"order_items"> | number
    order_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    product_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    variant_id?: IntNullableWithAggregatesFilter<"order_items"> | number | null
    product_name?: StringWithAggregatesFilter<"order_items"> | string
    variant_description?: StringNullableWithAggregatesFilter<"order_items"> | string | null
    price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    quantity?: IntWithAggregatesFilter<"order_items"> | number
    total_price?: DecimalWithAggregatesFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableWithAggregatesFilter<"order_items"> | Date | string | null
  }

  export type ordersWhereInput = {
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    order_number?: StringFilter<"orders"> | string
    status?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: IntNullableFilter<"orders"> | number | null
    billing_address_id?: IntNullableFilter<"orders"> | number | null
    payment_method?: StringFilter<"orders"> | string
    payment_status?: StringNullableFilter<"orders"> | string | null
    tracking_number?: StringNullableFilter<"orders"> | string | null
    notes?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    addresses_orders_billing_address_idToaddresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
    addresses_orders_shipping_address_idToaddresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type ordersOrderByWithRelationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrderInput | SortOrder
    billing_address_id?: SortOrderInput | SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    order_items?: order_itemsOrderByRelationAggregateInput
    addresses_orders_billing_address_idToaddresses?: addressesOrderByWithRelationInput
    addresses_orders_shipping_address_idToaddresses?: addressesOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type ordersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    order_number?: string
    AND?: ordersWhereInput | ordersWhereInput[]
    OR?: ordersWhereInput[]
    NOT?: ordersWhereInput | ordersWhereInput[]
    user_id?: IntNullableFilter<"orders"> | number | null
    status?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: IntNullableFilter<"orders"> | number | null
    billing_address_id?: IntNullableFilter<"orders"> | number | null
    payment_method?: StringFilter<"orders"> | string
    payment_status?: StringNullableFilter<"orders"> | string | null
    tracking_number?: StringNullableFilter<"orders"> | string | null
    notes?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    order_items?: Order_itemsListRelationFilter
    addresses_orders_billing_address_idToaddresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
    addresses_orders_shipping_address_idToaddresses?: XOR<AddressesNullableScalarRelationFilter, addressesWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id" | "order_number">

  export type ordersOrderByWithAggregationInput = {
    id?: SortOrder
    user_id?: SortOrderInput | SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrderInput | SortOrder
    billing_address_id?: SortOrderInput | SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrderInput | SortOrder
    tracking_number?: SortOrderInput | SortOrder
    notes?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: ordersCountOrderByAggregateInput
    _avg?: ordersAvgOrderByAggregateInput
    _max?: ordersMaxOrderByAggregateInput
    _min?: ordersMinOrderByAggregateInput
    _sum?: ordersSumOrderByAggregateInput
  }

  export type ordersScalarWhereWithAggregatesInput = {
    AND?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    OR?: ordersScalarWhereWithAggregatesInput[]
    NOT?: ordersScalarWhereWithAggregatesInput | ordersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"orders"> | number
    user_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    order_number?: StringWithAggregatesFilter<"orders"> | string
    status?: StringWithAggregatesFilter<"orders"> | string
    total_amount?: DecimalWithAggregatesFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    billing_address_id?: IntNullableWithAggregatesFilter<"orders"> | number | null
    payment_method?: StringWithAggregatesFilter<"orders"> | string
    payment_status?: StringNullableWithAggregatesFilter<"orders"> | string | null
    tracking_number?: StringNullableWithAggregatesFilter<"orders"> | string | null
    notes?: StringNullableWithAggregatesFilter<"orders"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"orders"> | Date | string | null
  }

  export type product_imagesWhereInput = {
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    id?: IntFilter<"product_images"> | number
    product_id?: IntNullableFilter<"product_images"> | number | null
    url?: StringFilter<"product_images"> | string
    alt_text?: StringNullableFilter<"product_images"> | string | null
    is_primary?: BoolNullableFilter<"product_images"> | boolean | null
    created_at?: DateTimeNullableFilter<"product_images"> | Date | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type product_imagesOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    url?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    is_primary?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
  }

  export type product_imagesWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_imagesWhereInput | product_imagesWhereInput[]
    OR?: product_imagesWhereInput[]
    NOT?: product_imagesWhereInput | product_imagesWhereInput[]
    product_id?: IntNullableFilter<"product_images"> | number | null
    url?: StringFilter<"product_images"> | string
    alt_text?: StringNullableFilter<"product_images"> | string | null
    is_primary?: BoolNullableFilter<"product_images"> | boolean | null
    created_at?: DateTimeNullableFilter<"product_images"> | Date | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id">

  export type product_imagesOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    url?: SortOrder
    alt_text?: SortOrderInput | SortOrder
    is_primary?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: product_imagesCountOrderByAggregateInput
    _avg?: product_imagesAvgOrderByAggregateInput
    _max?: product_imagesMaxOrderByAggregateInput
    _min?: product_imagesMinOrderByAggregateInput
    _sum?: product_imagesSumOrderByAggregateInput
  }

  export type product_imagesScalarWhereWithAggregatesInput = {
    AND?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    OR?: product_imagesScalarWhereWithAggregatesInput[]
    NOT?: product_imagesScalarWhereWithAggregatesInput | product_imagesScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_images"> | number
    product_id?: IntNullableWithAggregatesFilter<"product_images"> | number | null
    url?: StringWithAggregatesFilter<"product_images"> | string
    alt_text?: StringNullableWithAggregatesFilter<"product_images"> | string | null
    is_primary?: BoolNullableWithAggregatesFilter<"product_images"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"product_images"> | Date | string | null
  }

  export type product_reviewsWhereInput = {
    AND?: product_reviewsWhereInput | product_reviewsWhereInput[]
    OR?: product_reviewsWhereInput[]
    NOT?: product_reviewsWhereInput | product_reviewsWhereInput[]
    id?: IntFilter<"product_reviews"> | number
    product_id?: IntNullableFilter<"product_reviews"> | number | null
    user_id?: IntNullableFilter<"product_reviews"> | number | null
    rating?: IntFilter<"product_reviews"> | number
    comment?: StringNullableFilter<"product_reviews"> | string | null
    is_approved?: BoolNullableFilter<"product_reviews"> | boolean | null
    created_at?: DateTimeNullableFilter<"product_reviews"> | Date | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }

  export type product_reviewsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    products?: productsOrderByWithRelationInput
    users?: usersOrderByWithRelationInput
  }

  export type product_reviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: product_reviewsWhereInput | product_reviewsWhereInput[]
    OR?: product_reviewsWhereInput[]
    NOT?: product_reviewsWhereInput | product_reviewsWhereInput[]
    product_id?: IntNullableFilter<"product_reviews"> | number | null
    user_id?: IntNullableFilter<"product_reviews"> | number | null
    rating?: IntFilter<"product_reviews"> | number
    comment?: StringNullableFilter<"product_reviews"> | string | null
    is_approved?: BoolNullableFilter<"product_reviews"> | boolean | null
    created_at?: DateTimeNullableFilter<"product_reviews"> | Date | string | null
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
    users?: XOR<UsersNullableScalarRelationFilter, usersWhereInput> | null
  }, "id">

  export type product_reviewsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    user_id?: SortOrderInput | SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    is_approved?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: product_reviewsCountOrderByAggregateInput
    _avg?: product_reviewsAvgOrderByAggregateInput
    _max?: product_reviewsMaxOrderByAggregateInput
    _min?: product_reviewsMinOrderByAggregateInput
    _sum?: product_reviewsSumOrderByAggregateInput
  }

  export type product_reviewsScalarWhereWithAggregatesInput = {
    AND?: product_reviewsScalarWhereWithAggregatesInput | product_reviewsScalarWhereWithAggregatesInput[]
    OR?: product_reviewsScalarWhereWithAggregatesInput[]
    NOT?: product_reviewsScalarWhereWithAggregatesInput | product_reviewsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_reviews"> | number
    product_id?: IntNullableWithAggregatesFilter<"product_reviews"> | number | null
    user_id?: IntNullableWithAggregatesFilter<"product_reviews"> | number | null
    rating?: IntWithAggregatesFilter<"product_reviews"> | number
    comment?: StringNullableWithAggregatesFilter<"product_reviews"> | string | null
    is_approved?: BoolNullableWithAggregatesFilter<"product_reviews"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"product_reviews"> | Date | string | null
  }

  export type product_variantsWhereInput = {
    AND?: product_variantsWhereInput | product_variantsWhereInput[]
    OR?: product_variantsWhereInput[]
    NOT?: product_variantsWhereInput | product_variantsWhereInput[]
    id?: IntFilter<"product_variants"> | number
    product_id?: IntNullableFilter<"product_variants"> | number | null
    name?: StringFilter<"product_variants"> | string
    value?: StringFilter<"product_variants"> | string
    price_adjustment?: DecimalNullableFilter<"product_variants"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFilter<"product_variants"> | number
    sku?: StringNullableFilter<"product_variants"> | string | null
    created_at?: DateTimeNullableFilter<"product_variants"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }

  export type product_variantsOrderByWithRelationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    name?: SortOrder
    value?: SortOrder
    price_adjustment?: SortOrderInput | SortOrder
    stock_quantity?: SortOrder
    sku?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    products?: productsOrderByWithRelationInput
  }

  export type product_variantsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    product_id_name_value?: product_variantsProduct_idNameValueCompoundUniqueInput
    AND?: product_variantsWhereInput | product_variantsWhereInput[]
    OR?: product_variantsWhereInput[]
    NOT?: product_variantsWhereInput | product_variantsWhereInput[]
    product_id?: IntNullableFilter<"product_variants"> | number | null
    name?: StringFilter<"product_variants"> | string
    value?: StringFilter<"product_variants"> | string
    price_adjustment?: DecimalNullableFilter<"product_variants"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFilter<"product_variants"> | number
    sku?: StringNullableFilter<"product_variants"> | string | null
    created_at?: DateTimeNullableFilter<"product_variants"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    products?: XOR<ProductsNullableScalarRelationFilter, productsWhereInput> | null
  }, "id" | "product_id_name_value">

  export type product_variantsOrderByWithAggregationInput = {
    id?: SortOrder
    product_id?: SortOrderInput | SortOrder
    name?: SortOrder
    value?: SortOrder
    price_adjustment?: SortOrderInput | SortOrder
    stock_quantity?: SortOrder
    sku?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    _count?: product_variantsCountOrderByAggregateInput
    _avg?: product_variantsAvgOrderByAggregateInput
    _max?: product_variantsMaxOrderByAggregateInput
    _min?: product_variantsMinOrderByAggregateInput
    _sum?: product_variantsSumOrderByAggregateInput
  }

  export type product_variantsScalarWhereWithAggregatesInput = {
    AND?: product_variantsScalarWhereWithAggregatesInput | product_variantsScalarWhereWithAggregatesInput[]
    OR?: product_variantsScalarWhereWithAggregatesInput[]
    NOT?: product_variantsScalarWhereWithAggregatesInput | product_variantsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"product_variants"> | number
    product_id?: IntNullableWithAggregatesFilter<"product_variants"> | number | null
    name?: StringWithAggregatesFilter<"product_variants"> | string
    value?: StringWithAggregatesFilter<"product_variants"> | string
    price_adjustment?: DecimalNullableWithAggregatesFilter<"product_variants"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntWithAggregatesFilter<"product_variants"> | number
    sku?: StringNullableWithAggregatesFilter<"product_variants"> | string | null
    created_at?: DateTimeNullableWithAggregatesFilter<"product_variants"> | Date | string | null
  }

  export type productsWhereInput = {
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    slug?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    discount_price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFilter<"products"> | number
    category_id?: IntNullableFilter<"products"> | number | null
    is_featured?: BoolNullableFilter<"products"> | boolean | null
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    product_images?: Product_imagesListRelationFilter
    product_reviews?: Product_reviewsListRelationFilter
    product_variants?: Product_variantsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }

  export type productsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    discount_price?: SortOrderInput | SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrderInput | SortOrder
    is_featured?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    cart_items?: cart_itemsOrderByRelationAggregateInput
    order_items?: order_itemsOrderByRelationAggregateInput
    product_images?: product_imagesOrderByRelationAggregateInput
    product_reviews?: product_reviewsOrderByRelationAggregateInput
    product_variants?: product_variantsOrderByRelationAggregateInput
    categories?: categoriesOrderByWithRelationInput
  }

  export type productsWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    slug?: string
    AND?: productsWhereInput | productsWhereInput[]
    OR?: productsWhereInput[]
    NOT?: productsWhereInput | productsWhereInput[]
    name?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    discount_price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFilter<"products"> | number
    category_id?: IntNullableFilter<"products"> | number | null
    is_featured?: BoolNullableFilter<"products"> | boolean | null
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
    cart_items?: Cart_itemsListRelationFilter
    order_items?: Order_itemsListRelationFilter
    product_images?: Product_imagesListRelationFilter
    product_reviews?: Product_reviewsListRelationFilter
    product_variants?: Product_variantsListRelationFilter
    categories?: XOR<CategoriesNullableScalarRelationFilter, categoriesWhereInput> | null
  }, "id" | "slug">

  export type productsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    discount_price?: SortOrderInput | SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrderInput | SortOrder
    is_featured?: SortOrderInput | SortOrder
    is_active?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: productsCountOrderByAggregateInput
    _avg?: productsAvgOrderByAggregateInput
    _max?: productsMaxOrderByAggregateInput
    _min?: productsMinOrderByAggregateInput
    _sum?: productsSumOrderByAggregateInput
  }

  export type productsScalarWhereWithAggregatesInput = {
    AND?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    OR?: productsScalarWhereWithAggregatesInput[]
    NOT?: productsScalarWhereWithAggregatesInput | productsScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"products"> | number
    name?: StringWithAggregatesFilter<"products"> | string
    slug?: StringWithAggregatesFilter<"products"> | string
    description?: StringNullableWithAggregatesFilter<"products"> | string | null
    price?: DecimalWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string
    discount_price?: DecimalNullableWithAggregatesFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntWithAggregatesFilter<"products"> | number
    category_id?: IntNullableWithAggregatesFilter<"products"> | number | null
    is_featured?: BoolNullableWithAggregatesFilter<"products"> | boolean | null
    is_active?: BoolNullableWithAggregatesFilter<"products"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"products"> | Date | string | null
  }

  export type usersWhereInput = {
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    id?: IntFilter<"users"> | number
    email?: StringFilter<"users"> | string
    password_hash?: StringFilter<"users"> | string
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    is_admin?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    addresses?: AddressesListRelationFilter
    carts?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    product_reviews?: Product_reviewsListRelationFilter
  }

  export type usersOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    is_admin?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    addresses?: addressesOrderByRelationAggregateInput
    carts?: cartsOrderByRelationAggregateInput
    orders?: ordersOrderByRelationAggregateInput
    product_reviews?: product_reviewsOrderByRelationAggregateInput
  }

  export type usersWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: usersWhereInput | usersWhereInput[]
    OR?: usersWhereInput[]
    NOT?: usersWhereInput | usersWhereInput[]
    password_hash?: StringFilter<"users"> | string
    first_name?: StringNullableFilter<"users"> | string | null
    last_name?: StringNullableFilter<"users"> | string | null
    phone?: StringNullableFilter<"users"> | string | null
    is_admin?: BoolNullableFilter<"users"> | boolean | null
    created_at?: DateTimeNullableFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"users"> | Date | string | null
    addresses?: AddressesListRelationFilter
    carts?: CartsListRelationFilter
    orders?: OrdersListRelationFilter
    product_reviews?: Product_reviewsListRelationFilter
  }, "id" | "email">

  export type usersOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrderInput | SortOrder
    last_name?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    is_admin?: SortOrderInput | SortOrder
    created_at?: SortOrderInput | SortOrder
    updated_at?: SortOrderInput | SortOrder
    _count?: usersCountOrderByAggregateInput
    _avg?: usersAvgOrderByAggregateInput
    _max?: usersMaxOrderByAggregateInput
    _min?: usersMinOrderByAggregateInput
    _sum?: usersSumOrderByAggregateInput
  }

  export type usersScalarWhereWithAggregatesInput = {
    AND?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    OR?: usersScalarWhereWithAggregatesInput[]
    NOT?: usersScalarWhereWithAggregatesInput | usersScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"users"> | number
    email?: StringWithAggregatesFilter<"users"> | string
    password_hash?: StringWithAggregatesFilter<"users"> | string
    first_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    last_name?: StringNullableWithAggregatesFilter<"users"> | string | null
    phone?: StringNullableWithAggregatesFilter<"users"> | string | null
    is_admin?: BoolNullableWithAggregatesFilter<"users"> | boolean | null
    created_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
    updated_at?: DateTimeNullableWithAggregatesFilter<"users"> | Date | string | null
  }

  export type addressesCreateInput = {
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAddressesInput
    orders_orders_billing_address_idToaddresses?: ordersCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput
    orders_orders_shipping_address_idToaddresses?: ordersCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput
  }

  export type addressesUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUncheckedCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput
    orders_orders_shipping_address_idToaddresses?: ordersUncheckedCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput
  }

  export type addressesUpdateInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAddressesNestedInput
    orders_orders_billing_address_idToaddresses?: ordersUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput
    orders_orders_shipping_address_idToaddresses?: ordersUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput
  }

  export type addressesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUncheckedUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput
    orders_orders_shipping_address_idToaddresses?: ordersUncheckedUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput
  }

  export type addressesCreateManyInput = {
    id?: number
    user_id?: number | null
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
  }

  export type addressesUpdateManyMutationInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsCreateInput = {
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    carts?: cartsCreateNestedOneWithoutCart_itemsInput
    products?: productsCreateNestedOneWithoutCart_itemsInput
    product_variants?: product_variantsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateInput = {
    id?: number
    cart_id?: number | null
    product_id?: number | null
    variant_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cart_itemsUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput
    products?: productsUpdateOneWithoutCart_itemsNestedInput
    product_variants?: product_variantsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsCreateManyInput = {
    id?: number
    cart_id?: number | null
    product_id?: number | null
    variant_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cart_itemsUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsCreateInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput
    users?: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsUpdateInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput
    users?: usersUpdateOneWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsCreateManyInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cartsUpdateManyMutationInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
  }

  export type categoriesUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateInput = {
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
    products?: productsCreateNestedOneWithoutOrder_itemsInput
    product_variants?: product_variantsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    variant_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsUpdateInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
    product_variants?: product_variantsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateManyInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    variant_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsUpdateManyMutationInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersCreateInput = {
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    addresses_orders_billing_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_billing_address_idToaddressesInput
    addresses_orders_shipping_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_shipping_address_idToaddressesInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersUpdateInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    addresses_orders_billing_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_billing_address_idToaddressesNestedInput
    addresses_orders_shipping_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_shipping_address_idToaddressesNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersCreateManyInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersUpdateManyMutationInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_imagesCreateInput = {
    url: string
    alt_text?: string | null
    is_primary?: boolean | null
    created_at?: Date | string | null
    products?: productsCreateNestedOneWithoutProduct_imagesInput
  }

  export type product_imagesUncheckedCreateInput = {
    id?: number
    product_id?: number | null
    url: string
    alt_text?: string | null
    is_primary?: boolean | null
    created_at?: Date | string | null
  }

  export type product_imagesUpdateInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneWithoutProduct_imagesNestedInput
  }

  export type product_imagesUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_imagesCreateManyInput = {
    id?: number
    product_id?: number | null
    url: string
    alt_text?: string | null
    is_primary?: boolean | null
    created_at?: Date | string | null
  }

  export type product_imagesUpdateManyMutationInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_imagesUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsCreateInput = {
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
    products?: productsCreateNestedOneWithoutProduct_reviewsInput
    users?: usersCreateNestedOneWithoutProduct_reviewsInput
  }

  export type product_reviewsUncheckedCreateInput = {
    id?: number
    product_id?: number | null
    user_id?: number | null
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
  }

  export type product_reviewsUpdateInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneWithoutProduct_reviewsNestedInput
    users?: usersUpdateOneWithoutProduct_reviewsNestedInput
  }

  export type product_reviewsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsCreateManyInput = {
    id?: number
    product_id?: number | null
    user_id?: number | null
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
  }

  export type product_reviewsUpdateManyMutationInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_variantsCreateInput = {
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProduct_variantsInput
    order_items?: order_itemsCreateNestedManyWithoutProduct_variantsInput
    products?: productsCreateNestedOneWithoutProduct_variantsInput
  }

  export type product_variantsUncheckedCreateInput = {
    id?: number
    product_id?: number | null
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput
  }

  export type product_variantsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProduct_variantsNestedInput
    order_items?: order_itemsUpdateManyWithoutProduct_variantsNestedInput
    products?: productsUpdateOneWithoutProduct_variantsNestedInput
  }

  export type product_variantsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput
  }

  export type product_variantsCreateManyInput = {
    id?: number
    product_id?: number | null
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
  }

  export type product_variantsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_variantsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsCreateInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateManyInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type productsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersCreateInput = {
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutUsersInput
    carts?: cartsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateInput = {
    id?: number
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutUsersInput
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutUsersNestedInput
    carts?: cartsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutUsersNestedInput
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type usersCreateManyInput = {
    id?: number
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type usersUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type usersUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type UsersNullableScalarRelationFilter = {
    is?: usersWhereInput | null
    isNot?: usersWhereInput | null
  }

  export type OrdersListRelationFilter = {
    every?: ordersWhereInput
    some?: ordersWhereInput
    none?: ordersWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ordersOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type addressesCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
  }

  export type addressesAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type addressesMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
  }

  export type addressesMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    street?: SortOrder
    city?: SortOrder
    state?: SortOrder
    country?: SortOrder
    postal_code?: SortOrder
    is_default?: SortOrder
    created_at?: SortOrder
  }

  export type addressesSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type CartsNullableScalarRelationFilter = {
    is?: cartsWhereInput | null
    isNot?: cartsWhereInput | null
  }

  export type ProductsNullableScalarRelationFilter = {
    is?: productsWhereInput | null
    isNot?: productsWhereInput | null
  }

  export type Product_variantsNullableScalarRelationFilter = {
    is?: product_variantsWhereInput | null
    isNot?: product_variantsWhereInput | null
  }

  export type cart_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cart_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
  }

  export type cart_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cart_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cart_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    cart_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    quantity?: SortOrder
  }

  export type Cart_itemsListRelationFilter = {
    every?: cart_itemsWhereInput
    some?: cart_itemsWhereInput
    none?: cart_itemsWhereInput
  }

  export type cart_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartsCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type cartsMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type cartsSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
  }

  export type CategoriesNullableScalarRelationFilter = {
    is?: categoriesWhereInput | null
    isNot?: categoriesWhereInput | null
  }

  export type CategoriesListRelationFilter = {
    every?: categoriesWhereInput
    some?: categoriesWhereInput
    none?: categoriesWhereInput
  }

  export type ProductsListRelationFilter = {
    every?: productsWhereInput
    some?: productsWhereInput
    none?: productsWhereInput
  }

  export type categoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type categoriesCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesAvgOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type categoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    parent_id?: SortOrder
    created_at?: SortOrder
  }

  export type categoriesSumOrderByAggregateInput = {
    id?: SortOrder
    parent_id?: SortOrder
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type OrdersNullableScalarRelationFilter = {
    is?: ordersWhereInput | null
    isNot?: ordersWhereInput | null
  }

  export type order_itemsCountOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    product_name?: SortOrder
    variant_description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
  }

  export type order_itemsAvgOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type order_itemsMaxOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    product_name?: SortOrder
    variant_description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
  }

  export type order_itemsMinOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    product_name?: SortOrder
    variant_description?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
    created_at?: SortOrder
  }

  export type order_itemsSumOrderByAggregateInput = {
    id?: SortOrder
    order_id?: SortOrder
    product_id?: SortOrder
    variant_id?: SortOrder
    price?: SortOrder
    quantity?: SortOrder
    total_price?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type Order_itemsListRelationFilter = {
    every?: order_itemsWhereInput
    some?: order_itemsWhereInput
    none?: order_itemsWhereInput
  }

  export type AddressesNullableScalarRelationFilter = {
    is?: addressesWhereInput | null
    isNot?: addressesWhereInput | null
  }

  export type order_itemsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ordersCountOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    tracking_number?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersAvgOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
  }

  export type ordersMaxOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    tracking_number?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersMinOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    order_number?: SortOrder
    status?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
    payment_method?: SortOrder
    payment_status?: SortOrder
    tracking_number?: SortOrder
    notes?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type ordersSumOrderByAggregateInput = {
    id?: SortOrder
    user_id?: SortOrder
    total_amount?: SortOrder
    shipping_address_id?: SortOrder
    billing_address_id?: SortOrder
  }

  export type product_imagesCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
  }

  export type product_imagesAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type product_imagesMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
  }

  export type product_imagesMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    url?: SortOrder
    alt_text?: SortOrder
    is_primary?: SortOrder
    created_at?: SortOrder
  }

  export type product_imagesSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
  }

  export type product_reviewsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    is_approved?: SortOrder
    created_at?: SortOrder
  }

  export type product_reviewsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type product_reviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    is_approved?: SortOrder
    created_at?: SortOrder
  }

  export type product_reviewsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    is_approved?: SortOrder
    created_at?: SortOrder
  }

  export type product_reviewsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    user_id?: SortOrder
    rating?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type product_variantsProduct_idNameValueCompoundUniqueInput = {
    product_id: number
    name: string
    value: string
  }

  export type product_variantsCountOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    price_adjustment?: SortOrder
    stock_quantity?: SortOrder
    sku?: SortOrder
    created_at?: SortOrder
  }

  export type product_variantsAvgOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    price_adjustment?: SortOrder
    stock_quantity?: SortOrder
  }

  export type product_variantsMaxOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    price_adjustment?: SortOrder
    stock_quantity?: SortOrder
    sku?: SortOrder
    created_at?: SortOrder
  }

  export type product_variantsMinOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    name?: SortOrder
    value?: SortOrder
    price_adjustment?: SortOrder
    stock_quantity?: SortOrder
    sku?: SortOrder
    created_at?: SortOrder
  }

  export type product_variantsSumOrderByAggregateInput = {
    id?: SortOrder
    product_id?: SortOrder
    price_adjustment?: SortOrder
    stock_quantity?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type Product_imagesListRelationFilter = {
    every?: product_imagesWhereInput
    some?: product_imagesWhereInput
    none?: product_imagesWhereInput
  }

  export type Product_reviewsListRelationFilter = {
    every?: product_reviewsWhereInput
    some?: product_reviewsWhereInput
    none?: product_reviewsWhereInput
  }

  export type Product_variantsListRelationFilter = {
    every?: product_variantsWhereInput
    some?: product_variantsWhereInput
    none?: product_variantsWhereInput
  }

  export type product_imagesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_reviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type product_variantsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type productsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
    is_featured?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
  }

  export type productsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
    is_featured?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    price?: SortOrder
    discount_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
    is_featured?: SortOrder
    is_active?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type productsSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount_price?: SortOrder
    stock_quantity?: SortOrder
    category_id?: SortOrder
  }

  export type AddressesListRelationFilter = {
    every?: addressesWhereInput
    some?: addressesWhereInput
    none?: addressesWhereInput
  }

  export type CartsListRelationFilter = {
    every?: cartsWhereInput
    some?: cartsWhereInput
    none?: cartsWhereInput
  }

  export type addressesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type cartsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type usersCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password_hash?: SortOrder
    first_name?: SortOrder
    last_name?: SortOrder
    phone?: SortOrder
    is_admin?: SortOrder
    created_at?: SortOrder
    updated_at?: SortOrder
  }

  export type usersSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type usersCreateNestedOneWithoutAddressesInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    connect?: usersWhereUniqueInput
  }

  export type ordersCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_billing_address_idToaddressesInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_shipping_address_idToaddressesInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_billing_address_idToaddressesInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_shipping_address_idToaddressesInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type usersUpdateOneWithoutAddressesNestedInput = {
    create?: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    connectOrCreate?: usersCreateOrConnectWithoutAddressesInput
    upsert?: usersUpsertWithoutAddressesInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutAddressesInput, usersUpdateWithoutAddressesInput>, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type ordersUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput | ordersUpsertWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_billing_address_idToaddressesInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput | ordersUpdateWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutAddresses_orders_billing_address_idToaddressesInput | ordersUpdateManyWithWhereWithoutAddresses_orders_billing_address_idToaddressesInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersUpsertWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_shipping_address_idToaddressesInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersUpdateWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersUpdateManyWithWhereWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ordersUncheckedUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput | ordersUpsertWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_billing_address_idToaddressesInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput | ordersUpdateWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutAddresses_orders_billing_address_idToaddressesInput | ordersUpdateManyWithWhereWithoutAddresses_orders_billing_address_idToaddressesInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput = {
    create?: XOR<ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput> | ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[] | ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersUpsertWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    createMany?: ordersCreateManyAddresses_orders_shipping_address_idToaddressesInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersUpdateWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutAddresses_orders_shipping_address_idToaddressesInput | ordersUpdateManyWithWhereWithoutAddresses_orders_shipping_address_idToaddressesInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type cartsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    connect?: cartsWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type product_variantsCreateNestedOneWithoutCart_itemsInput = {
    create?: XOR<product_variantsCreateWithoutCart_itemsInput, product_variantsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: product_variantsCreateOrConnectWithoutCart_itemsInput
    connect?: product_variantsWhereUniqueInput
  }

  export type cartsUpdateOneWithoutCart_itemsNestedInput = {
    create?: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: cartsCreateOrConnectWithoutCart_itemsInput
    upsert?: cartsUpsertWithoutCart_itemsInput
    disconnect?: cartsWhereInput | boolean
    delete?: cartsWhereInput | boolean
    connect?: cartsWhereUniqueInput
    update?: XOR<XOR<cartsUpdateToOneWithWhereWithoutCart_itemsInput, cartsUpdateWithoutCart_itemsInput>, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateOneWithoutCart_itemsNestedInput = {
    create?: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutCart_itemsInput
    upsert?: productsUpsertWithoutCart_itemsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutCart_itemsInput, productsUpdateWithoutCart_itemsInput>, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type product_variantsUpdateOneWithoutCart_itemsNestedInput = {
    create?: XOR<product_variantsCreateWithoutCart_itemsInput, product_variantsUncheckedCreateWithoutCart_itemsInput>
    connectOrCreate?: product_variantsCreateOrConnectWithoutCart_itemsInput
    upsert?: product_variantsUpsertWithoutCart_itemsInput
    disconnect?: product_variantsWhereInput | boolean
    delete?: product_variantsWhereInput | boolean
    connect?: product_variantsWhereUniqueInput
    update?: XOR<XOR<product_variantsUpdateToOneWithWhereWithoutCart_itemsInput, product_variantsUpdateWithoutCart_itemsInput>, product_variantsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cart_itemsCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type usersCreateNestedOneWithoutCartsInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    connect?: usersWhereUniqueInput
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutCartsInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type cart_itemsUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartsInput | cart_itemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartsInput | cart_itemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartsInput | cart_itemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type usersUpdateOneWithoutCartsNestedInput = {
    create?: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    connectOrCreate?: usersCreateOrConnectWithoutCartsInput
    upsert?: usersUpsertWithoutCartsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutCartsInput, usersUpdateWithoutCartsInput>, usersUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput> | cart_itemsCreateWithoutCartsInput[] | cart_itemsUncheckedCreateWithoutCartsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutCartsInput | cart_itemsCreateOrConnectWithoutCartsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutCartsInput | cart_itemsUpsertWithWhereUniqueWithoutCartsInput[]
    createMany?: cart_itemsCreateManyCartsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutCartsInput | cart_itemsUpdateWithWhereUniqueWithoutCartsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutCartsInput | cart_itemsUpdateManyWithWhereWithoutCartsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type categoriesCreateNestedOneWithoutOther_categoriesInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput
    connect?: categoriesWhereUniqueInput
  }

  export type categoriesCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type productsCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type categoriesUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
  }

  export type productsUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
  }

  export type categoriesUpdateOneWithoutOther_categoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutOther_categoriesInput
    upsert?: categoriesUpsertWithoutOther_categoriesInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutOther_categoriesInput, categoriesUpdateWithoutOther_categoriesInput>, categoriesUncheckedUpdateWithoutOther_categoriesInput>
  }

  export type categoriesUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCategoriesInput | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCategoriesInput | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCategoriesInput | categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type productsUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type categoriesUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput> | categoriesCreateWithoutCategoriesInput[] | categoriesUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: categoriesCreateOrConnectWithoutCategoriesInput | categoriesCreateOrConnectWithoutCategoriesInput[]
    upsert?: categoriesUpsertWithWhereUniqueWithoutCategoriesInput | categoriesUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: categoriesCreateManyCategoriesInputEnvelope
    set?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    disconnect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    delete?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    connect?: categoriesWhereUniqueInput | categoriesWhereUniqueInput[]
    update?: categoriesUpdateWithWhereUniqueWithoutCategoriesInput | categoriesUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: categoriesUpdateManyWithWhereWithoutCategoriesInput | categoriesUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
  }

  export type productsUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput> | productsCreateWithoutCategoriesInput[] | productsUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: productsCreateOrConnectWithoutCategoriesInput | productsCreateOrConnectWithoutCategoriesInput[]
    upsert?: productsUpsertWithWhereUniqueWithoutCategoriesInput | productsUpsertWithWhereUniqueWithoutCategoriesInput[]
    createMany?: productsCreateManyCategoriesInputEnvelope
    set?: productsWhereUniqueInput | productsWhereUniqueInput[]
    disconnect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    delete?: productsWhereUniqueInput | productsWhereUniqueInput[]
    connect?: productsWhereUniqueInput | productsWhereUniqueInput[]
    update?: productsUpdateWithWhereUniqueWithoutCategoriesInput | productsUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: productsUpdateManyWithWhereWithoutCategoriesInput | productsUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: productsScalarWhereInput | productsScalarWhereInput[]
  }

  export type ordersCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    connect?: ordersWhereUniqueInput
  }

  export type productsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    connect?: productsWhereUniqueInput
  }

  export type product_variantsCreateNestedOneWithoutOrder_itemsInput = {
    create?: XOR<product_variantsCreateWithoutOrder_itemsInput, product_variantsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: product_variantsCreateOrConnectWithoutOrder_itemsInput
    connect?: product_variantsWhereUniqueInput
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type ordersUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: ordersCreateOrConnectWithoutOrder_itemsInput
    upsert?: ordersUpsertWithoutOrder_itemsInput
    disconnect?: ordersWhereInput | boolean
    delete?: ordersWhereInput | boolean
    connect?: ordersWhereUniqueInput
    update?: XOR<XOR<ordersUpdateToOneWithWhereWithoutOrder_itemsInput, ordersUpdateWithoutOrder_itemsInput>, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: productsCreateOrConnectWithoutOrder_itemsInput
    upsert?: productsUpsertWithoutOrder_itemsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutOrder_itemsInput, productsUpdateWithoutOrder_itemsInput>, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type product_variantsUpdateOneWithoutOrder_itemsNestedInput = {
    create?: XOR<product_variantsCreateWithoutOrder_itemsInput, product_variantsUncheckedCreateWithoutOrder_itemsInput>
    connectOrCreate?: product_variantsCreateOrConnectWithoutOrder_itemsInput
    upsert?: product_variantsUpsertWithoutOrder_itemsInput
    disconnect?: product_variantsWhereInput | boolean
    delete?: product_variantsWhereInput | boolean
    connect?: product_variantsWhereUniqueInput
    update?: XOR<XOR<product_variantsUpdateToOneWithWhereWithoutOrder_itemsInput, product_variantsUpdateWithoutOrder_itemsInput>, product_variantsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type order_itemsCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type addressesCreateNestedOneWithoutOrders_orders_billing_address_idToaddressesInput = {
    create?: XOR<addressesCreateWithoutOrders_orders_billing_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_billing_address_idToaddressesInput>
    connectOrCreate?: addressesCreateOrConnectWithoutOrders_orders_billing_address_idToaddressesInput
    connect?: addressesWhereUniqueInput
  }

  export type addressesCreateNestedOneWithoutOrders_orders_shipping_address_idToaddressesInput = {
    create?: XOR<addressesCreateWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_shipping_address_idToaddressesInput>
    connectOrCreate?: addressesCreateOrConnectWithoutOrders_orders_shipping_address_idToaddressesInput
    connect?: addressesWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutOrdersInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    connect?: usersWhereUniqueInput
  }

  export type order_itemsUncheckedCreateNestedManyWithoutOrdersInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type order_itemsUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type addressesUpdateOneWithoutOrders_orders_billing_address_idToaddressesNestedInput = {
    create?: XOR<addressesCreateWithoutOrders_orders_billing_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_billing_address_idToaddressesInput>
    connectOrCreate?: addressesCreateOrConnectWithoutOrders_orders_billing_address_idToaddressesInput
    upsert?: addressesUpsertWithoutOrders_orders_billing_address_idToaddressesInput
    disconnect?: addressesWhereInput | boolean
    delete?: addressesWhereInput | boolean
    connect?: addressesWhereUniqueInput
    update?: XOR<XOR<addressesUpdateToOneWithWhereWithoutOrders_orders_billing_address_idToaddressesInput, addressesUpdateWithoutOrders_orders_billing_address_idToaddressesInput>, addressesUncheckedUpdateWithoutOrders_orders_billing_address_idToaddressesInput>
  }

  export type addressesUpdateOneWithoutOrders_orders_shipping_address_idToaddressesNestedInput = {
    create?: XOR<addressesCreateWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_shipping_address_idToaddressesInput>
    connectOrCreate?: addressesCreateOrConnectWithoutOrders_orders_shipping_address_idToaddressesInput
    upsert?: addressesUpsertWithoutOrders_orders_shipping_address_idToaddressesInput
    disconnect?: addressesWhereInput | boolean
    delete?: addressesWhereInput | boolean
    connect?: addressesWhereUniqueInput
    update?: XOR<XOR<addressesUpdateToOneWithWhereWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUpdateWithoutOrders_orders_shipping_address_idToaddressesInput>, addressesUncheckedUpdateWithoutOrders_orders_shipping_address_idToaddressesInput>
  }

  export type usersUpdateOneWithoutOrdersNestedInput = {
    create?: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    connectOrCreate?: usersCreateOrConnectWithoutOrdersInput
    upsert?: usersUpsertWithoutOrdersInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutOrdersInput, usersUpdateWithoutOrdersInput>, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersNestedInput = {
    create?: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput> | order_itemsCreateWithoutOrdersInput[] | order_itemsUncheckedCreateWithoutOrdersInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutOrdersInput | order_itemsCreateOrConnectWithoutOrdersInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutOrdersInput | order_itemsUpsertWithWhereUniqueWithoutOrdersInput[]
    createMany?: order_itemsCreateManyOrdersInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutOrdersInput | order_itemsUpdateWithWhereUniqueWithoutOrdersInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutOrdersInput | order_itemsUpdateManyWithWhereWithoutOrdersInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type productsCreateNestedOneWithoutProduct_imagesInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    connect?: productsWhereUniqueInput
  }

  export type productsUpdateOneWithoutProduct_imagesNestedInput = {
    create?: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_imagesInput
    upsert?: productsUpsertWithoutProduct_imagesInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_imagesInput, productsUpdateWithoutProduct_imagesInput>, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type productsCreateNestedOneWithoutProduct_reviewsInput = {
    create?: XOR<productsCreateWithoutProduct_reviewsInput, productsUncheckedCreateWithoutProduct_reviewsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_reviewsInput
    connect?: productsWhereUniqueInput
  }

  export type usersCreateNestedOneWithoutProduct_reviewsInput = {
    create?: XOR<usersCreateWithoutProduct_reviewsInput, usersUncheckedCreateWithoutProduct_reviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProduct_reviewsInput
    connect?: usersWhereUniqueInput
  }

  export type productsUpdateOneWithoutProduct_reviewsNestedInput = {
    create?: XOR<productsCreateWithoutProduct_reviewsInput, productsUncheckedCreateWithoutProduct_reviewsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_reviewsInput
    upsert?: productsUpsertWithoutProduct_reviewsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_reviewsInput, productsUpdateWithoutProduct_reviewsInput>, productsUncheckedUpdateWithoutProduct_reviewsInput>
  }

  export type usersUpdateOneWithoutProduct_reviewsNestedInput = {
    create?: XOR<usersCreateWithoutProduct_reviewsInput, usersUncheckedCreateWithoutProduct_reviewsInput>
    connectOrCreate?: usersCreateOrConnectWithoutProduct_reviewsInput
    upsert?: usersUpsertWithoutProduct_reviewsInput
    disconnect?: usersWhereInput | boolean
    delete?: usersWhereInput | boolean
    connect?: usersWhereUniqueInput
    update?: XOR<XOR<usersUpdateToOneWithWhereWithoutProduct_reviewsInput, usersUpdateWithoutProduct_reviewsInput>, usersUncheckedUpdateWithoutProduct_reviewsInput>
  }

  export type cart_itemsCreateNestedManyWithoutProduct_variantsInput = {
    create?: XOR<cart_itemsCreateWithoutProduct_variantsInput, cart_itemsUncheckedCreateWithoutProduct_variantsInput> | cart_itemsCreateWithoutProduct_variantsInput[] | cart_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProduct_variantsInput | cart_itemsCreateOrConnectWithoutProduct_variantsInput[]
    createMany?: cart_itemsCreateManyProduct_variantsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProduct_variantsInput = {
    create?: XOR<order_itemsCreateWithoutProduct_variantsInput, order_itemsUncheckedCreateWithoutProduct_variantsInput> | order_itemsCreateWithoutProduct_variantsInput[] | order_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProduct_variantsInput | order_itemsCreateOrConnectWithoutProduct_variantsInput[]
    createMany?: order_itemsCreateManyProduct_variantsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type productsCreateNestedOneWithoutProduct_variantsInput = {
    create?: XOR<productsCreateWithoutProduct_variantsInput, productsUncheckedCreateWithoutProduct_variantsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_variantsInput
    connect?: productsWhereUniqueInput
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: XOR<cart_itemsCreateWithoutProduct_variantsInput, cart_itemsUncheckedCreateWithoutProduct_variantsInput> | cart_itemsCreateWithoutProduct_variantsInput[] | cart_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProduct_variantsInput | cart_itemsCreateOrConnectWithoutProduct_variantsInput[]
    createMany?: cart_itemsCreateManyProduct_variantsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput = {
    create?: XOR<order_itemsCreateWithoutProduct_variantsInput, order_itemsUncheckedCreateWithoutProduct_variantsInput> | order_itemsCreateWithoutProduct_variantsInput[] | order_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProduct_variantsInput | order_itemsCreateOrConnectWithoutProduct_variantsInput[]
    createMany?: order_itemsCreateManyProduct_variantsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type cart_itemsUpdateManyWithoutProduct_variantsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProduct_variantsInput, cart_itemsUncheckedCreateWithoutProduct_variantsInput> | cart_itemsCreateWithoutProduct_variantsInput[] | cart_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProduct_variantsInput | cart_itemsCreateOrConnectWithoutProduct_variantsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[]
    createMany?: cart_itemsCreateManyProduct_variantsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput | cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProduct_variantsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProduct_variantsInput, order_itemsUncheckedCreateWithoutProduct_variantsInput> | order_itemsCreateWithoutProduct_variantsInput[] | order_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProduct_variantsInput | order_itemsCreateOrConnectWithoutProduct_variantsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[]
    createMany?: order_itemsCreateManyProduct_variantsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProduct_variantsInput | order_itemsUpdateManyWithWhereWithoutProduct_variantsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type productsUpdateOneWithoutProduct_variantsNestedInput = {
    create?: XOR<productsCreateWithoutProduct_variantsInput, productsUncheckedCreateWithoutProduct_variantsInput>
    connectOrCreate?: productsCreateOrConnectWithoutProduct_variantsInput
    upsert?: productsUpsertWithoutProduct_variantsInput
    disconnect?: productsWhereInput | boolean
    delete?: productsWhereInput | boolean
    connect?: productsWhereUniqueInput
    update?: XOR<XOR<productsUpdateToOneWithWhereWithoutProduct_variantsInput, productsUpdateWithoutProduct_variantsInput>, productsUncheckedUpdateWithoutProduct_variantsInput>
  }

  export type cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProduct_variantsInput, cart_itemsUncheckedCreateWithoutProduct_variantsInput> | cart_itemsCreateWithoutProduct_variantsInput[] | cart_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProduct_variantsInput | cart_itemsCreateOrConnectWithoutProduct_variantsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[]
    createMany?: cart_itemsCreateManyProduct_variantsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput | cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProduct_variantsInput, order_itemsUncheckedCreateWithoutProduct_variantsInput> | order_itemsCreateWithoutProduct_variantsInput[] | order_itemsUncheckedCreateWithoutProduct_variantsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProduct_variantsInput | order_itemsCreateOrConnectWithoutProduct_variantsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput | order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput[]
    createMany?: order_itemsCreateManyProduct_variantsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput | order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProduct_variantsInput | order_itemsUpdateManyWithWhereWithoutProduct_variantsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type cart_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_itemsCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type product_imagesCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type product_reviewsCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_reviewsCreateWithoutProductsInput, product_reviewsUncheckedCreateWithoutProductsInput> | product_reviewsCreateWithoutProductsInput[] | product_reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutProductsInput | product_reviewsCreateOrConnectWithoutProductsInput[]
    createMany?: product_reviewsCreateManyProductsInputEnvelope
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
  }

  export type product_variantsCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_variantsCreateWithoutProductsInput, product_variantsUncheckedCreateWithoutProductsInput> | product_variantsCreateWithoutProductsInput[] | product_variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_variantsCreateOrConnectWithoutProductsInput | product_variantsCreateOrConnectWithoutProductsInput[]
    createMany?: product_variantsCreateManyProductsInputEnvelope
    connect?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
  }

  export type categoriesCreateNestedOneWithoutProductsInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    connect?: categoriesWhereUniqueInput
  }

  export type cart_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
  }

  export type order_itemsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
  }

  export type product_imagesUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
  }

  export type product_reviewsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_reviewsCreateWithoutProductsInput, product_reviewsUncheckedCreateWithoutProductsInput> | product_reviewsCreateWithoutProductsInput[] | product_reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutProductsInput | product_reviewsCreateOrConnectWithoutProductsInput[]
    createMany?: product_reviewsCreateManyProductsInputEnvelope
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
  }

  export type product_variantsUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<product_variantsCreateWithoutProductsInput, product_variantsUncheckedCreateWithoutProductsInput> | product_variantsCreateWithoutProductsInput[] | product_variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_variantsCreateOrConnectWithoutProductsInput | product_variantsCreateOrConnectWithoutProductsInput[]
    createMany?: product_variantsCreateManyProductsInputEnvelope
    connect?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
  }

  export type cart_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductsInput | cart_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductsInput | cart_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductsInput | cart_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_itemsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type product_imagesUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type product_reviewsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_reviewsCreateWithoutProductsInput, product_reviewsUncheckedCreateWithoutProductsInput> | product_reviewsCreateWithoutProductsInput[] | product_reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutProductsInput | product_reviewsCreateOrConnectWithoutProductsInput[]
    upsert?: product_reviewsUpsertWithWhereUniqueWithoutProductsInput | product_reviewsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_reviewsCreateManyProductsInputEnvelope
    set?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    disconnect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    delete?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    update?: product_reviewsUpdateWithWhereUniqueWithoutProductsInput | product_reviewsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_reviewsUpdateManyWithWhereWithoutProductsInput | product_reviewsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_reviewsScalarWhereInput | product_reviewsScalarWhereInput[]
  }

  export type product_variantsUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_variantsCreateWithoutProductsInput, product_variantsUncheckedCreateWithoutProductsInput> | product_variantsCreateWithoutProductsInput[] | product_variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_variantsCreateOrConnectWithoutProductsInput | product_variantsCreateOrConnectWithoutProductsInput[]
    upsert?: product_variantsUpsertWithWhereUniqueWithoutProductsInput | product_variantsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_variantsCreateManyProductsInputEnvelope
    set?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    disconnect?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    delete?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    connect?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    update?: product_variantsUpdateWithWhereUniqueWithoutProductsInput | product_variantsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_variantsUpdateManyWithWhereWithoutProductsInput | product_variantsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_variantsScalarWhereInput | product_variantsScalarWhereInput[]
  }

  export type categoriesUpdateOneWithoutProductsNestedInput = {
    create?: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    connectOrCreate?: categoriesCreateOrConnectWithoutProductsInput
    upsert?: categoriesUpsertWithoutProductsInput
    disconnect?: categoriesWhereInput | boolean
    delete?: categoriesWhereInput | boolean
    connect?: categoriesWhereUniqueInput
    update?: XOR<XOR<categoriesUpdateToOneWithWhereWithoutProductsInput, categoriesUpdateWithoutProductsInput>, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput> | cart_itemsCreateWithoutProductsInput[] | cart_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: cart_itemsCreateOrConnectWithoutProductsInput | cart_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: cart_itemsUpsertWithWhereUniqueWithoutProductsInput | cart_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: cart_itemsCreateManyProductsInputEnvelope
    set?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    disconnect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    delete?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    connect?: cart_itemsWhereUniqueInput | cart_itemsWhereUniqueInput[]
    update?: cart_itemsUpdateWithWhereUniqueWithoutProductsInput | cart_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: cart_itemsUpdateManyWithWhereWithoutProductsInput | cart_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput> | order_itemsCreateWithoutProductsInput[] | order_itemsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: order_itemsCreateOrConnectWithoutProductsInput | order_itemsCreateOrConnectWithoutProductsInput[]
    upsert?: order_itemsUpsertWithWhereUniqueWithoutProductsInput | order_itemsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: order_itemsCreateManyProductsInputEnvelope
    set?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    disconnect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    delete?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    connect?: order_itemsWhereUniqueInput | order_itemsWhereUniqueInput[]
    update?: order_itemsUpdateWithWhereUniqueWithoutProductsInput | order_itemsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: order_itemsUpdateManyWithWhereWithoutProductsInput | order_itemsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput> | product_imagesCreateWithoutProductsInput[] | product_imagesUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_imagesCreateOrConnectWithoutProductsInput | product_imagesCreateOrConnectWithoutProductsInput[]
    upsert?: product_imagesUpsertWithWhereUniqueWithoutProductsInput | product_imagesUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_imagesCreateManyProductsInputEnvelope
    set?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    disconnect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    delete?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    connect?: product_imagesWhereUniqueInput | product_imagesWhereUniqueInput[]
    update?: product_imagesUpdateWithWhereUniqueWithoutProductsInput | product_imagesUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_imagesUpdateManyWithWhereWithoutProductsInput | product_imagesUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
  }

  export type product_reviewsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_reviewsCreateWithoutProductsInput, product_reviewsUncheckedCreateWithoutProductsInput> | product_reviewsCreateWithoutProductsInput[] | product_reviewsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutProductsInput | product_reviewsCreateOrConnectWithoutProductsInput[]
    upsert?: product_reviewsUpsertWithWhereUniqueWithoutProductsInput | product_reviewsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_reviewsCreateManyProductsInputEnvelope
    set?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    disconnect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    delete?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    update?: product_reviewsUpdateWithWhereUniqueWithoutProductsInput | product_reviewsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_reviewsUpdateManyWithWhereWithoutProductsInput | product_reviewsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_reviewsScalarWhereInput | product_reviewsScalarWhereInput[]
  }

  export type product_variantsUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<product_variantsCreateWithoutProductsInput, product_variantsUncheckedCreateWithoutProductsInput> | product_variantsCreateWithoutProductsInput[] | product_variantsUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: product_variantsCreateOrConnectWithoutProductsInput | product_variantsCreateOrConnectWithoutProductsInput[]
    upsert?: product_variantsUpsertWithWhereUniqueWithoutProductsInput | product_variantsUpsertWithWhereUniqueWithoutProductsInput[]
    createMany?: product_variantsCreateManyProductsInputEnvelope
    set?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    disconnect?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    delete?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    connect?: product_variantsWhereUniqueInput | product_variantsWhereUniqueInput[]
    update?: product_variantsUpdateWithWhereUniqueWithoutProductsInput | product_variantsUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: product_variantsUpdateManyWithWhereWithoutProductsInput | product_variantsUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: product_variantsScalarWhereInput | product_variantsScalarWhereInput[]
  }

  export type addressesCreateNestedManyWithoutUsersInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type cartsCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type ordersCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type product_reviewsCreateNestedManyWithoutUsersInput = {
    create?: XOR<product_reviewsCreateWithoutUsersInput, product_reviewsUncheckedCreateWithoutUsersInput> | product_reviewsCreateWithoutUsersInput[] | product_reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutUsersInput | product_reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: product_reviewsCreateManyUsersInputEnvelope
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
  }

  export type addressesUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
  }

  export type cartsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
  }

  export type ordersUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
  }

  export type product_reviewsUncheckedCreateNestedManyWithoutUsersInput = {
    create?: XOR<product_reviewsCreateWithoutUsersInput, product_reviewsUncheckedCreateWithoutUsersInput> | product_reviewsCreateWithoutUsersInput[] | product_reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutUsersInput | product_reviewsCreateOrConnectWithoutUsersInput[]
    createMany?: product_reviewsCreateManyUsersInputEnvelope
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
  }

  export type addressesUpdateManyWithoutUsersNestedInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUsersInput | addressesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUsersInput | addressesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUsersInput | addressesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type cartsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutUsersInput | cartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutUsersInput | cartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutUsersInput | cartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type ordersUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type product_reviewsUpdateManyWithoutUsersNestedInput = {
    create?: XOR<product_reviewsCreateWithoutUsersInput, product_reviewsUncheckedCreateWithoutUsersInput> | product_reviewsCreateWithoutUsersInput[] | product_reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutUsersInput | product_reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: product_reviewsUpsertWithWhereUniqueWithoutUsersInput | product_reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: product_reviewsCreateManyUsersInputEnvelope
    set?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    disconnect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    delete?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    update?: product_reviewsUpdateWithWhereUniqueWithoutUsersInput | product_reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: product_reviewsUpdateManyWithWhereWithoutUsersInput | product_reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: product_reviewsScalarWhereInput | product_reviewsScalarWhereInput[]
  }

  export type addressesUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput> | addressesCreateWithoutUsersInput[] | addressesUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: addressesCreateOrConnectWithoutUsersInput | addressesCreateOrConnectWithoutUsersInput[]
    upsert?: addressesUpsertWithWhereUniqueWithoutUsersInput | addressesUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: addressesCreateManyUsersInputEnvelope
    set?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    disconnect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    delete?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    connect?: addressesWhereUniqueInput | addressesWhereUniqueInput[]
    update?: addressesUpdateWithWhereUniqueWithoutUsersInput | addressesUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: addressesUpdateManyWithWhereWithoutUsersInput | addressesUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: addressesScalarWhereInput | addressesScalarWhereInput[]
  }

  export type cartsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput> | cartsCreateWithoutUsersInput[] | cartsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: cartsCreateOrConnectWithoutUsersInput | cartsCreateOrConnectWithoutUsersInput[]
    upsert?: cartsUpsertWithWhereUniqueWithoutUsersInput | cartsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: cartsCreateManyUsersInputEnvelope
    set?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    disconnect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    delete?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    connect?: cartsWhereUniqueInput | cartsWhereUniqueInput[]
    update?: cartsUpdateWithWhereUniqueWithoutUsersInput | cartsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: cartsUpdateManyWithWhereWithoutUsersInput | cartsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: cartsScalarWhereInput | cartsScalarWhereInput[]
  }

  export type ordersUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput> | ordersCreateWithoutUsersInput[] | ordersUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: ordersCreateOrConnectWithoutUsersInput | ordersCreateOrConnectWithoutUsersInput[]
    upsert?: ordersUpsertWithWhereUniqueWithoutUsersInput | ordersUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: ordersCreateManyUsersInputEnvelope
    set?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    disconnect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    delete?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    connect?: ordersWhereUniqueInput | ordersWhereUniqueInput[]
    update?: ordersUpdateWithWhereUniqueWithoutUsersInput | ordersUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: ordersUpdateManyWithWhereWithoutUsersInput | ordersUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: ordersScalarWhereInput | ordersScalarWhereInput[]
  }

  export type product_reviewsUncheckedUpdateManyWithoutUsersNestedInput = {
    create?: XOR<product_reviewsCreateWithoutUsersInput, product_reviewsUncheckedCreateWithoutUsersInput> | product_reviewsCreateWithoutUsersInput[] | product_reviewsUncheckedCreateWithoutUsersInput[]
    connectOrCreate?: product_reviewsCreateOrConnectWithoutUsersInput | product_reviewsCreateOrConnectWithoutUsersInput[]
    upsert?: product_reviewsUpsertWithWhereUniqueWithoutUsersInput | product_reviewsUpsertWithWhereUniqueWithoutUsersInput[]
    createMany?: product_reviewsCreateManyUsersInputEnvelope
    set?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    disconnect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    delete?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    connect?: product_reviewsWhereUniqueInput | product_reviewsWhereUniqueInput[]
    update?: product_reviewsUpdateWithWhereUniqueWithoutUsersInput | product_reviewsUpdateWithWhereUniqueWithoutUsersInput[]
    updateMany?: product_reviewsUpdateManyWithWhereWithoutUsersInput | product_reviewsUpdateManyWithWhereWithoutUsersInput[]
    deleteMany?: product_reviewsScalarWhereInput | product_reviewsScalarWhereInput[]
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type usersCreateWithoutAddressesInput = {
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    carts?: cartsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutAddressesInput = {
    id?: number
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutAddressesInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
  }

  export type ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput = {
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    addresses_orders_shipping_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_shipping_address_idToaddressesInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutAddresses_orders_billing_address_idToaddressesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput>
  }

  export type ordersCreateManyAddresses_orders_billing_address_idToaddressesInputEnvelope = {
    data: ordersCreateManyAddresses_orders_billing_address_idToaddressesInput | ordersCreateManyAddresses_orders_billing_address_idToaddressesInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    addresses_orders_billing_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_billing_address_idToaddressesInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput>
  }

  export type ordersCreateManyAddresses_orders_shipping_address_idToaddressesInputEnvelope = {
    data: ordersCreateManyAddresses_orders_shipping_address_idToaddressesInput | ordersCreateManyAddresses_orders_shipping_address_idToaddressesInput[]
    skipDuplicates?: boolean
  }

  export type usersUpsertWithoutAddressesInput = {
    update: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
    create: XOR<usersCreateWithoutAddressesInput, usersUncheckedCreateWithoutAddressesInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutAddressesInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutAddressesInput, usersUncheckedUpdateWithoutAddressesInput>
  }

  export type usersUpdateWithoutAddressesInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutAddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type ordersUpsertWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedUpdateWithoutAddresses_orders_billing_address_idToaddressesInput>
    create: XOR<ordersCreateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_billing_address_idToaddressesInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutAddresses_orders_billing_address_idToaddressesInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutAddresses_orders_billing_address_idToaddressesInput, ordersUncheckedUpdateWithoutAddresses_orders_billing_address_idToaddressesInput>
  }

  export type ordersUpdateManyWithWhereWithoutAddresses_orders_billing_address_idToaddressesInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutAddresses_orders_billing_address_idToaddressesInput>
  }

  export type ordersScalarWhereInput = {
    AND?: ordersScalarWhereInput | ordersScalarWhereInput[]
    OR?: ordersScalarWhereInput[]
    NOT?: ordersScalarWhereInput | ordersScalarWhereInput[]
    id?: IntFilter<"orders"> | number
    user_id?: IntNullableFilter<"orders"> | number | null
    order_number?: StringFilter<"orders"> | string
    status?: StringFilter<"orders"> | string
    total_amount?: DecimalFilter<"orders"> | Decimal | DecimalJsLike | number | string
    shipping_address_id?: IntNullableFilter<"orders"> | number | null
    billing_address_id?: IntNullableFilter<"orders"> | number | null
    payment_method?: StringFilter<"orders"> | string
    payment_status?: StringNullableFilter<"orders"> | string | null
    tracking_number?: StringNullableFilter<"orders"> | string | null
    notes?: StringNullableFilter<"orders"> | string | null
    created_at?: DateTimeNullableFilter<"orders"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"orders"> | Date | string | null
  }

  export type ordersUpsertWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedUpdateWithoutAddresses_orders_shipping_address_idToaddressesInput>
    create: XOR<ordersCreateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedCreateWithoutAddresses_orders_shipping_address_idToaddressesInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutAddresses_orders_shipping_address_idToaddressesInput, ordersUncheckedUpdateWithoutAddresses_orders_shipping_address_idToaddressesInput>
  }

  export type ordersUpdateManyWithWhereWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesInput>
  }

  export type cartsCreateWithoutCart_itemsInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    users?: usersCreateNestedOneWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    user_id?: number | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cartsCreateOrConnectWithoutCart_itemsInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
  }

  export type productsCreateWithoutCart_itemsInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCart_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
  }

  export type product_variantsCreateWithoutCart_itemsInput = {
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutProduct_variantsInput
    products?: productsCreateNestedOneWithoutProduct_variantsInput
  }

  export type product_variantsUncheckedCreateWithoutCart_itemsInput = {
    id?: number
    product_id?: number | null
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput
  }

  export type product_variantsCreateOrConnectWithoutCart_itemsInput = {
    where: product_variantsWhereUniqueInput
    create: XOR<product_variantsCreateWithoutCart_itemsInput, product_variantsUncheckedCreateWithoutCart_itemsInput>
  }

  export type cartsUpsertWithoutCart_itemsInput = {
    update: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<cartsCreateWithoutCart_itemsInput, cartsUncheckedCreateWithoutCart_itemsInput>
    where?: cartsWhereInput
  }

  export type cartsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: cartsWhereInput
    data: XOR<cartsUpdateWithoutCart_itemsInput, cartsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type cartsUpdateWithoutCart_itemsInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutCart_itemsInput = {
    update: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<productsCreateWithoutCart_itemsInput, productsUncheckedCreateWithoutCart_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutCart_itemsInput, productsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type productsUpdateWithoutCart_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_variantsUpsertWithoutCart_itemsInput = {
    update: XOR<product_variantsUpdateWithoutCart_itemsInput, product_variantsUncheckedUpdateWithoutCart_itemsInput>
    create: XOR<product_variantsCreateWithoutCart_itemsInput, product_variantsUncheckedCreateWithoutCart_itemsInput>
    where?: product_variantsWhereInput
  }

  export type product_variantsUpdateToOneWithWhereWithoutCart_itemsInput = {
    where?: product_variantsWhereInput
    data: XOR<product_variantsUpdateWithoutCart_itemsInput, product_variantsUncheckedUpdateWithoutCart_itemsInput>
  }

  export type product_variantsUpdateWithoutCart_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutProduct_variantsNestedInput
    products?: productsUpdateOneWithoutProduct_variantsNestedInput
  }

  export type product_variantsUncheckedUpdateWithoutCart_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput
  }

  export type cart_itemsCreateWithoutCartsInput = {
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    products?: productsCreateNestedOneWithoutCart_itemsInput
    product_variants?: product_variantsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutCartsInput = {
    id?: number
    product_id?: number | null
    variant_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cart_itemsCreateOrConnectWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsCreateManyCartsInputEnvelope = {
    data: cart_itemsCreateManyCartsInput | cart_itemsCreateManyCartsInput[]
    skipDuplicates?: boolean
  }

  export type usersCreateWithoutCartsInput = {
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutCartsInput = {
    id?: number
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutCartsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutCartsInput, cart_itemsUncheckedUpdateWithoutCartsInput>
    create: XOR<cart_itemsCreateWithoutCartsInput, cart_itemsUncheckedCreateWithoutCartsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutCartsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutCartsInput, cart_itemsUncheckedUpdateWithoutCartsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutCartsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutCartsInput>
  }

  export type cart_itemsScalarWhereInput = {
    AND?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    OR?: cart_itemsScalarWhereInput[]
    NOT?: cart_itemsScalarWhereInput | cart_itemsScalarWhereInput[]
    id?: IntFilter<"cart_items"> | number
    cart_id?: IntNullableFilter<"cart_items"> | number | null
    product_id?: IntNullableFilter<"cart_items"> | number | null
    variant_id?: IntNullableFilter<"cart_items"> | number | null
    quantity?: IntFilter<"cart_items"> | number
    created_at?: DateTimeNullableFilter<"cart_items"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"cart_items"> | Date | string | null
  }

  export type usersUpsertWithoutCartsInput = {
    update: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
    create: XOR<usersCreateWithoutCartsInput, usersUncheckedCreateWithoutCartsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutCartsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutCartsInput, usersUncheckedUpdateWithoutCartsInput>
  }

  export type usersUpdateWithoutCartsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type categoriesCreateWithoutOther_categoriesInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutOther_categoriesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutOther_categoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
  }

  export type categoriesCreateWithoutCategoriesInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
    products?: productsCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
    products?: productsUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type categoriesCreateManyCategoriesInputEnvelope = {
    data: categoriesCreateManyCategoriesInput | categoriesCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutCategoriesInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsCreateNestedManyWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsCreateManyCategoriesInputEnvelope = {
    data: productsCreateManyCategoriesInput | productsCreateManyCategoriesInput[]
    skipDuplicates?: boolean
  }

  export type categoriesUpsertWithoutOther_categoriesInput = {
    update: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>
    create: XOR<categoriesCreateWithoutOther_categoriesInput, categoriesUncheckedCreateWithoutOther_categoriesInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutOther_categoriesInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutOther_categoriesInput, categoriesUncheckedUpdateWithoutOther_categoriesInput>
  }

  export type categoriesUpdateWithoutOther_categoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutOther_categoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    update: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>
    create: XOR<categoriesCreateWithoutCategoriesInput, categoriesUncheckedCreateWithoutCategoriesInput>
  }

  export type categoriesUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: categoriesWhereUniqueInput
    data: XOR<categoriesUpdateWithoutCategoriesInput, categoriesUncheckedUpdateWithoutCategoriesInput>
  }

  export type categoriesUpdateManyWithWhereWithoutCategoriesInput = {
    where: categoriesScalarWhereInput
    data: XOR<categoriesUpdateManyMutationInput, categoriesUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type categoriesScalarWhereInput = {
    AND?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    OR?: categoriesScalarWhereInput[]
    NOT?: categoriesScalarWhereInput | categoriesScalarWhereInput[]
    id?: IntFilter<"categories"> | number
    name?: StringFilter<"categories"> | string
    slug?: StringFilter<"categories"> | string
    description?: StringNullableFilter<"categories"> | string | null
    parent_id?: IntNullableFilter<"categories"> | number | null
    created_at?: DateTimeNullableFilter<"categories"> | Date | string | null
  }

  export type productsUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    update: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
    create: XOR<productsCreateWithoutCategoriesInput, productsUncheckedCreateWithoutCategoriesInput>
  }

  export type productsUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: productsWhereUniqueInput
    data: XOR<productsUpdateWithoutCategoriesInput, productsUncheckedUpdateWithoutCategoriesInput>
  }

  export type productsUpdateManyWithWhereWithoutCategoriesInput = {
    where: productsScalarWhereInput
    data: XOR<productsUpdateManyMutationInput, productsUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type productsScalarWhereInput = {
    AND?: productsScalarWhereInput | productsScalarWhereInput[]
    OR?: productsScalarWhereInput[]
    NOT?: productsScalarWhereInput | productsScalarWhereInput[]
    id?: IntFilter<"products"> | number
    name?: StringFilter<"products"> | string
    slug?: StringFilter<"products"> | string
    description?: StringNullableFilter<"products"> | string | null
    price?: DecimalFilter<"products"> | Decimal | DecimalJsLike | number | string
    discount_price?: DecimalNullableFilter<"products"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFilter<"products"> | number
    category_id?: IntNullableFilter<"products"> | number | null
    is_featured?: BoolNullableFilter<"products"> | boolean | null
    is_active?: BoolNullableFilter<"products"> | boolean | null
    created_at?: DateTimeNullableFilter<"products"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"products"> | Date | string | null
  }

  export type ordersCreateWithoutOrder_itemsInput = {
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses_orders_billing_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_billing_address_idToaddressesInput
    addresses_orders_shipping_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_shipping_address_idToaddressesInput
    users?: usersCreateNestedOneWithoutOrdersInput
  }

  export type ordersUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersCreateOrConnectWithoutOrder_itemsInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
  }

  export type productsCreateWithoutOrder_itemsInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutOrder_itemsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type product_variantsCreateWithoutOrder_itemsInput = {
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProduct_variantsInput
    products?: productsCreateNestedOneWithoutProduct_variantsInput
  }

  export type product_variantsUncheckedCreateWithoutOrder_itemsInput = {
    id?: number
    product_id?: number | null
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput
  }

  export type product_variantsCreateOrConnectWithoutOrder_itemsInput = {
    where: product_variantsWhereUniqueInput
    create: XOR<product_variantsCreateWithoutOrder_itemsInput, product_variantsUncheckedCreateWithoutOrder_itemsInput>
  }

  export type ordersUpsertWithoutOrder_itemsInput = {
    update: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<ordersCreateWithoutOrder_itemsInput, ordersUncheckedCreateWithoutOrder_itemsInput>
    where?: ordersWhereInput
  }

  export type ordersUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: ordersWhereInput
    data: XOR<ordersUpdateWithoutOrder_itemsInput, ordersUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type ordersUpdateWithoutOrder_itemsInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses_orders_billing_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_billing_address_idToaddressesNestedInput
    addresses_orders_shipping_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_shipping_address_idToaddressesNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpsertWithoutOrder_itemsInput = {
    update: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<productsCreateWithoutOrder_itemsInput, productsUncheckedCreateWithoutOrder_itemsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutOrder_itemsInput, productsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type productsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type product_variantsUpsertWithoutOrder_itemsInput = {
    update: XOR<product_variantsUpdateWithoutOrder_itemsInput, product_variantsUncheckedUpdateWithoutOrder_itemsInput>
    create: XOR<product_variantsCreateWithoutOrder_itemsInput, product_variantsUncheckedCreateWithoutOrder_itemsInput>
    where?: product_variantsWhereInput
  }

  export type product_variantsUpdateToOneWithWhereWithoutOrder_itemsInput = {
    where?: product_variantsWhereInput
    data: XOR<product_variantsUpdateWithoutOrder_itemsInput, product_variantsUncheckedUpdateWithoutOrder_itemsInput>
  }

  export type product_variantsUpdateWithoutOrder_itemsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProduct_variantsNestedInput
    products?: productsUpdateOneWithoutProduct_variantsNestedInput
  }

  export type product_variantsUncheckedUpdateWithoutOrder_itemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput
  }

  export type order_itemsCreateWithoutOrdersInput = {
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    products?: productsCreateNestedOneWithoutOrder_itemsInput
    product_variants?: product_variantsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutOrdersInput = {
    id?: number
    product_id?: number | null
    variant_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsCreateOrConnectWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsCreateManyOrdersInputEnvelope = {
    data: order_itemsCreateManyOrdersInput | order_itemsCreateManyOrdersInput[]
    skipDuplicates?: boolean
  }

  export type addressesCreateWithoutOrders_orders_billing_address_idToaddressesInput = {
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAddressesInput
    orders_orders_shipping_address_idToaddresses?: ordersCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput
  }

  export type addressesUncheckedCreateWithoutOrders_orders_billing_address_idToaddressesInput = {
    id?: number
    user_id?: number | null
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    orders_orders_shipping_address_idToaddresses?: ordersUncheckedCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput
  }

  export type addressesCreateOrConnectWithoutOrders_orders_billing_address_idToaddressesInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutOrders_orders_billing_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_billing_address_idToaddressesInput>
  }

  export type addressesCreateWithoutOrders_orders_shipping_address_idToaddressesInput = {
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutAddressesInput
    orders_orders_billing_address_idToaddresses?: ordersCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput
  }

  export type addressesUncheckedCreateWithoutOrders_orders_shipping_address_idToaddressesInput = {
    id?: number
    user_id?: number | null
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUncheckedCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput
  }

  export type addressesCreateOrConnectWithoutOrders_orders_shipping_address_idToaddressesInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_shipping_address_idToaddressesInput>
  }

  export type usersCreateWithoutOrdersInput = {
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutUsersInput
    carts?: cartsCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutOrdersInput = {
    id?: number
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutUsersInput
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutOrdersInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
    create: XOR<order_itemsCreateWithoutOrdersInput, order_itemsUncheckedCreateWithoutOrdersInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutOrdersInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutOrdersInput, order_itemsUncheckedUpdateWithoutOrdersInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutOrdersInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutOrdersInput>
  }

  export type order_itemsScalarWhereInput = {
    AND?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    OR?: order_itemsScalarWhereInput[]
    NOT?: order_itemsScalarWhereInput | order_itemsScalarWhereInput[]
    id?: IntFilter<"order_items"> | number
    order_id?: IntNullableFilter<"order_items"> | number | null
    product_id?: IntNullableFilter<"order_items"> | number | null
    variant_id?: IntNullableFilter<"order_items"> | number | null
    product_name?: StringFilter<"order_items"> | string
    variant_description?: StringNullableFilter<"order_items"> | string | null
    price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    quantity?: IntFilter<"order_items"> | number
    total_price?: DecimalFilter<"order_items"> | Decimal | DecimalJsLike | number | string
    created_at?: DateTimeNullableFilter<"order_items"> | Date | string | null
  }

  export type addressesUpsertWithoutOrders_orders_billing_address_idToaddressesInput = {
    update: XOR<addressesUpdateWithoutOrders_orders_billing_address_idToaddressesInput, addressesUncheckedUpdateWithoutOrders_orders_billing_address_idToaddressesInput>
    create: XOR<addressesCreateWithoutOrders_orders_billing_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_billing_address_idToaddressesInput>
    where?: addressesWhereInput
  }

  export type addressesUpdateToOneWithWhereWithoutOrders_orders_billing_address_idToaddressesInput = {
    where?: addressesWhereInput
    data: XOR<addressesUpdateWithoutOrders_orders_billing_address_idToaddressesInput, addressesUncheckedUpdateWithoutOrders_orders_billing_address_idToaddressesInput>
  }

  export type addressesUpdateWithoutOrders_orders_billing_address_idToaddressesInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAddressesNestedInput
    orders_orders_shipping_address_idToaddresses?: ordersUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput
  }

  export type addressesUncheckedUpdateWithoutOrders_orders_billing_address_idToaddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_orders_shipping_address_idToaddresses?: ordersUncheckedUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput
  }

  export type addressesUpsertWithoutOrders_orders_shipping_address_idToaddressesInput = {
    update: XOR<addressesUpdateWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUncheckedUpdateWithoutOrders_orders_shipping_address_idToaddressesInput>
    create: XOR<addressesCreateWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUncheckedCreateWithoutOrders_orders_shipping_address_idToaddressesInput>
    where?: addressesWhereInput
  }

  export type addressesUpdateToOneWithWhereWithoutOrders_orders_shipping_address_idToaddressesInput = {
    where?: addressesWhereInput
    data: XOR<addressesUpdateWithoutOrders_orders_shipping_address_idToaddressesInput, addressesUncheckedUpdateWithoutOrders_orders_shipping_address_idToaddressesInput>
  }

  export type addressesUpdateWithoutOrders_orders_shipping_address_idToaddressesInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutAddressesNestedInput
    orders_orders_billing_address_idToaddresses?: ordersUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput
  }

  export type addressesUncheckedUpdateWithoutOrders_orders_shipping_address_idToaddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUncheckedUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput
  }

  export type usersUpsertWithoutOrdersInput = {
    update: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
    create: XOR<usersCreateWithoutOrdersInput, usersUncheckedCreateWithoutOrdersInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutOrdersInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutOrdersInput, usersUncheckedUpdateWithoutOrdersInput>
  }

  export type usersUpdateWithoutOrdersInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutUsersNestedInput
    carts?: cartsUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutUsersNestedInput
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type productsCreateWithoutProduct_imagesInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_imagesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_imagesInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
  }

  export type productsUpsertWithoutProduct_imagesInput = {
    update: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
    create: XOR<productsCreateWithoutProduct_imagesInput, productsUncheckedCreateWithoutProduct_imagesInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_imagesInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_imagesInput, productsUncheckedUpdateWithoutProduct_imagesInput>
  }

  export type productsUpdateWithoutProduct_imagesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_imagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsCreateWithoutProduct_reviewsInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_reviewsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_variants?: product_variantsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_reviewsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_reviewsInput, productsUncheckedCreateWithoutProduct_reviewsInput>
  }

  export type usersCreateWithoutProduct_reviewsInput = {
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesCreateNestedManyWithoutUsersInput
    carts?: cartsCreateNestedManyWithoutUsersInput
    orders?: ordersCreateNestedManyWithoutUsersInput
  }

  export type usersUncheckedCreateWithoutProduct_reviewsInput = {
    id?: number
    email: string
    password_hash: string
    first_name?: string | null
    last_name?: string | null
    phone?: string | null
    is_admin?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    addresses?: addressesUncheckedCreateNestedManyWithoutUsersInput
    carts?: cartsUncheckedCreateNestedManyWithoutUsersInput
    orders?: ordersUncheckedCreateNestedManyWithoutUsersInput
  }

  export type usersCreateOrConnectWithoutProduct_reviewsInput = {
    where: usersWhereUniqueInput
    create: XOR<usersCreateWithoutProduct_reviewsInput, usersUncheckedCreateWithoutProduct_reviewsInput>
  }

  export type productsUpsertWithoutProduct_reviewsInput = {
    update: XOR<productsUpdateWithoutProduct_reviewsInput, productsUncheckedUpdateWithoutProduct_reviewsInput>
    create: XOR<productsCreateWithoutProduct_reviewsInput, productsUncheckedCreateWithoutProduct_reviewsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_reviewsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_reviewsInput, productsUncheckedUpdateWithoutProduct_reviewsInput>
  }

  export type productsUpdateWithoutProduct_reviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_reviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type usersUpsertWithoutProduct_reviewsInput = {
    update: XOR<usersUpdateWithoutProduct_reviewsInput, usersUncheckedUpdateWithoutProduct_reviewsInput>
    create: XOR<usersCreateWithoutProduct_reviewsInput, usersUncheckedCreateWithoutProduct_reviewsInput>
    where?: usersWhereInput
  }

  export type usersUpdateToOneWithWhereWithoutProduct_reviewsInput = {
    where?: usersWhereInput
    data: XOR<usersUpdateWithoutProduct_reviewsInput, usersUncheckedUpdateWithoutProduct_reviewsInput>
  }

  export type usersUpdateWithoutProduct_reviewsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUpdateManyWithoutUsersNestedInput
    carts?: cartsUpdateManyWithoutUsersNestedInput
    orders?: ordersUpdateManyWithoutUsersNestedInput
  }

  export type usersUncheckedUpdateWithoutProduct_reviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    email?: StringFieldUpdateOperationsInput | string
    password_hash?: StringFieldUpdateOperationsInput | string
    first_name?: NullableStringFieldUpdateOperationsInput | string | null
    last_name?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    is_admin?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    addresses?: addressesUncheckedUpdateManyWithoutUsersNestedInput
    carts?: cartsUncheckedUpdateManyWithoutUsersNestedInput
    orders?: ordersUncheckedUpdateManyWithoutUsersNestedInput
  }

  export type cart_itemsCreateWithoutProduct_variantsInput = {
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    carts?: cartsCreateNestedOneWithoutCart_itemsInput
    products?: productsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutProduct_variantsInput = {
    id?: number
    cart_id?: number | null
    product_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cart_itemsCreateOrConnectWithoutProduct_variantsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutProduct_variantsInput, cart_itemsUncheckedCreateWithoutProduct_variantsInput>
  }

  export type cart_itemsCreateManyProduct_variantsInputEnvelope = {
    data: cart_itemsCreateManyProduct_variantsInput | cart_itemsCreateManyProduct_variantsInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProduct_variantsInput = {
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
    products?: productsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProduct_variantsInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsCreateOrConnectWithoutProduct_variantsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProduct_variantsInput, order_itemsUncheckedCreateWithoutProduct_variantsInput>
  }

  export type order_itemsCreateManyProduct_variantsInputEnvelope = {
    data: order_itemsCreateManyProduct_variantsInput | order_itemsCreateManyProduct_variantsInput[]
    skipDuplicates?: boolean
  }

  export type productsCreateWithoutProduct_variantsInput = {
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProductsInput
    order_items?: order_itemsCreateNestedManyWithoutProductsInput
    product_images?: product_imagesCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsCreateNestedManyWithoutProductsInput
    categories?: categoriesCreateNestedOneWithoutProductsInput
  }

  export type productsUncheckedCreateWithoutProduct_variantsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    category_id?: number | null
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProductsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProductsInput
    product_images?: product_imagesUncheckedCreateNestedManyWithoutProductsInput
    product_reviews?: product_reviewsUncheckedCreateNestedManyWithoutProductsInput
  }

  export type productsCreateOrConnectWithoutProduct_variantsInput = {
    where: productsWhereUniqueInput
    create: XOR<productsCreateWithoutProduct_variantsInput, productsUncheckedCreateWithoutProduct_variantsInput>
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutProduct_variantsInput, cart_itemsUncheckedUpdateWithoutProduct_variantsInput>
    create: XOR<cart_itemsCreateWithoutProduct_variantsInput, cart_itemsUncheckedCreateWithoutProduct_variantsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutProduct_variantsInput, cart_itemsUncheckedUpdateWithoutProduct_variantsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutProduct_variantsInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProduct_variantsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProduct_variantsInput, order_itemsUncheckedUpdateWithoutProduct_variantsInput>
    create: XOR<order_itemsCreateWithoutProduct_variantsInput, order_itemsUncheckedCreateWithoutProduct_variantsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProduct_variantsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProduct_variantsInput, order_itemsUncheckedUpdateWithoutProduct_variantsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProduct_variantsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProduct_variantsInput>
  }

  export type productsUpsertWithoutProduct_variantsInput = {
    update: XOR<productsUpdateWithoutProduct_variantsInput, productsUncheckedUpdateWithoutProduct_variantsInput>
    create: XOR<productsCreateWithoutProduct_variantsInput, productsUncheckedCreateWithoutProduct_variantsInput>
    where?: productsWhereInput
  }

  export type productsUpdateToOneWithWhereWithoutProduct_variantsInput = {
    where?: productsWhereInput
    data: XOR<productsUpdateWithoutProduct_variantsInput, productsUncheckedUpdateWithoutProduct_variantsInput>
  }

  export type productsUpdateWithoutProduct_variantsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutProductsNestedInput
    categories?: categoriesUpdateOneWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutProduct_variantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    category_id?: NullableIntFieldUpdateOperationsInput | number | null
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type cart_itemsCreateWithoutProductsInput = {
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    carts?: cartsCreateNestedOneWithoutCart_itemsInput
    product_variants?: product_variantsCreateNestedOneWithoutCart_itemsInput
  }

  export type cart_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    cart_id?: number | null
    variant_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cart_itemsCreateOrConnectWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    create: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsCreateManyProductsInputEnvelope = {
    data: cart_itemsCreateManyProductsInput | cart_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type order_itemsCreateWithoutProductsInput = {
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
    orders?: ordersCreateNestedOneWithoutOrder_itemsInput
    product_variants?: product_variantsCreateNestedOneWithoutOrder_itemsInput
  }

  export type order_itemsUncheckedCreateWithoutProductsInput = {
    id?: number
    order_id?: number | null
    variant_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsCreateOrConnectWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsCreateManyProductsInputEnvelope = {
    data: order_itemsCreateManyProductsInput | order_itemsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_imagesCreateWithoutProductsInput = {
    url: string
    alt_text?: string | null
    is_primary?: boolean | null
    created_at?: Date | string | null
  }

  export type product_imagesUncheckedCreateWithoutProductsInput = {
    id?: number
    url: string
    alt_text?: string | null
    is_primary?: boolean | null
    created_at?: Date | string | null
  }

  export type product_imagesCreateOrConnectWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesCreateManyProductsInputEnvelope = {
    data: product_imagesCreateManyProductsInput | product_imagesCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_reviewsCreateWithoutProductsInput = {
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
    users?: usersCreateNestedOneWithoutProduct_reviewsInput
  }

  export type product_reviewsUncheckedCreateWithoutProductsInput = {
    id?: number
    user_id?: number | null
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
  }

  export type product_reviewsCreateOrConnectWithoutProductsInput = {
    where: product_reviewsWhereUniqueInput
    create: XOR<product_reviewsCreateWithoutProductsInput, product_reviewsUncheckedCreateWithoutProductsInput>
  }

  export type product_reviewsCreateManyProductsInputEnvelope = {
    data: product_reviewsCreateManyProductsInput | product_reviewsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type product_variantsCreateWithoutProductsInput = {
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutProduct_variantsInput
    order_items?: order_itemsCreateNestedManyWithoutProduct_variantsInput
  }

  export type product_variantsUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput
    order_items?: order_itemsUncheckedCreateNestedManyWithoutProduct_variantsInput
  }

  export type product_variantsCreateOrConnectWithoutProductsInput = {
    where: product_variantsWhereUniqueInput
    create: XOR<product_variantsCreateWithoutProductsInput, product_variantsUncheckedCreateWithoutProductsInput>
  }

  export type product_variantsCreateManyProductsInputEnvelope = {
    data: product_variantsCreateManyProductsInput | product_variantsCreateManyProductsInput[]
    skipDuplicates?: boolean
  }

  export type categoriesCreateWithoutProductsInput = {
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
    categories?: categoriesCreateNestedOneWithoutOther_categoriesInput
    other_categories?: categoriesCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    parent_id?: number | null
    created_at?: Date | string | null
    other_categories?: categoriesUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type categoriesCreateOrConnectWithoutProductsInput = {
    where: categoriesWhereUniqueInput
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    update: XOR<cart_itemsUpdateWithoutProductsInput, cart_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<cart_itemsCreateWithoutProductsInput, cart_itemsUncheckedCreateWithoutProductsInput>
  }

  export type cart_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: cart_itemsWhereUniqueInput
    data: XOR<cart_itemsUpdateWithoutProductsInput, cart_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type cart_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: cart_itemsScalarWhereInput
    data: XOR<cart_itemsUpdateManyMutationInput, cart_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type order_itemsUpsertWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    update: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
    create: XOR<order_itemsCreateWithoutProductsInput, order_itemsUncheckedCreateWithoutProductsInput>
  }

  export type order_itemsUpdateWithWhereUniqueWithoutProductsInput = {
    where: order_itemsWhereUniqueInput
    data: XOR<order_itemsUpdateWithoutProductsInput, order_itemsUncheckedUpdateWithoutProductsInput>
  }

  export type order_itemsUpdateManyWithWhereWithoutProductsInput = {
    where: order_itemsScalarWhereInput
    data: XOR<order_itemsUpdateManyMutationInput, order_itemsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_imagesUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    update: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
    create: XOR<product_imagesCreateWithoutProductsInput, product_imagesUncheckedCreateWithoutProductsInput>
  }

  export type product_imagesUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_imagesWhereUniqueInput
    data: XOR<product_imagesUpdateWithoutProductsInput, product_imagesUncheckedUpdateWithoutProductsInput>
  }

  export type product_imagesUpdateManyWithWhereWithoutProductsInput = {
    where: product_imagesScalarWhereInput
    data: XOR<product_imagesUpdateManyMutationInput, product_imagesUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_imagesScalarWhereInput = {
    AND?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    OR?: product_imagesScalarWhereInput[]
    NOT?: product_imagesScalarWhereInput | product_imagesScalarWhereInput[]
    id?: IntFilter<"product_images"> | number
    product_id?: IntNullableFilter<"product_images"> | number | null
    url?: StringFilter<"product_images"> | string
    alt_text?: StringNullableFilter<"product_images"> | string | null
    is_primary?: BoolNullableFilter<"product_images"> | boolean | null
    created_at?: DateTimeNullableFilter<"product_images"> | Date | string | null
  }

  export type product_reviewsUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_reviewsWhereUniqueInput
    update: XOR<product_reviewsUpdateWithoutProductsInput, product_reviewsUncheckedUpdateWithoutProductsInput>
    create: XOR<product_reviewsCreateWithoutProductsInput, product_reviewsUncheckedCreateWithoutProductsInput>
  }

  export type product_reviewsUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_reviewsWhereUniqueInput
    data: XOR<product_reviewsUpdateWithoutProductsInput, product_reviewsUncheckedUpdateWithoutProductsInput>
  }

  export type product_reviewsUpdateManyWithWhereWithoutProductsInput = {
    where: product_reviewsScalarWhereInput
    data: XOR<product_reviewsUpdateManyMutationInput, product_reviewsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_reviewsScalarWhereInput = {
    AND?: product_reviewsScalarWhereInput | product_reviewsScalarWhereInput[]
    OR?: product_reviewsScalarWhereInput[]
    NOT?: product_reviewsScalarWhereInput | product_reviewsScalarWhereInput[]
    id?: IntFilter<"product_reviews"> | number
    product_id?: IntNullableFilter<"product_reviews"> | number | null
    user_id?: IntNullableFilter<"product_reviews"> | number | null
    rating?: IntFilter<"product_reviews"> | number
    comment?: StringNullableFilter<"product_reviews"> | string | null
    is_approved?: BoolNullableFilter<"product_reviews"> | boolean | null
    created_at?: DateTimeNullableFilter<"product_reviews"> | Date | string | null
  }

  export type product_variantsUpsertWithWhereUniqueWithoutProductsInput = {
    where: product_variantsWhereUniqueInput
    update: XOR<product_variantsUpdateWithoutProductsInput, product_variantsUncheckedUpdateWithoutProductsInput>
    create: XOR<product_variantsCreateWithoutProductsInput, product_variantsUncheckedCreateWithoutProductsInput>
  }

  export type product_variantsUpdateWithWhereUniqueWithoutProductsInput = {
    where: product_variantsWhereUniqueInput
    data: XOR<product_variantsUpdateWithoutProductsInput, product_variantsUncheckedUpdateWithoutProductsInput>
  }

  export type product_variantsUpdateManyWithWhereWithoutProductsInput = {
    where: product_variantsScalarWhereInput
    data: XOR<product_variantsUpdateManyMutationInput, product_variantsUncheckedUpdateManyWithoutProductsInput>
  }

  export type product_variantsScalarWhereInput = {
    AND?: product_variantsScalarWhereInput | product_variantsScalarWhereInput[]
    OR?: product_variantsScalarWhereInput[]
    NOT?: product_variantsScalarWhereInput | product_variantsScalarWhereInput[]
    id?: IntFilter<"product_variants"> | number
    product_id?: IntNullableFilter<"product_variants"> | number | null
    name?: StringFilter<"product_variants"> | string
    value?: StringFilter<"product_variants"> | string
    price_adjustment?: DecimalNullableFilter<"product_variants"> | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFilter<"product_variants"> | number
    sku?: StringNullableFilter<"product_variants"> | string | null
    created_at?: DateTimeNullableFilter<"product_variants"> | Date | string | null
  }

  export type categoriesUpsertWithoutProductsInput = {
    update: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
    create: XOR<categoriesCreateWithoutProductsInput, categoriesUncheckedCreateWithoutProductsInput>
    where?: categoriesWhereInput
  }

  export type categoriesUpdateToOneWithWhereWithoutProductsInput = {
    where?: categoriesWhereInput
    data: XOR<categoriesUpdateWithoutProductsInput, categoriesUncheckedUpdateWithoutProductsInput>
  }

  export type categoriesUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    categories?: categoriesUpdateOneWithoutOther_categoriesNestedInput
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    parent_id?: NullableIntFieldUpdateOperationsInput | number | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type addressesCreateWithoutUsersInput = {
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput
    orders_orders_shipping_address_idToaddresses?: ordersCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput
  }

  export type addressesUncheckedCreateWithoutUsersInput = {
    id?: number
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUncheckedCreateNestedManyWithoutAddresses_orders_billing_address_idToaddressesInput
    orders_orders_shipping_address_idToaddresses?: ordersUncheckedCreateNestedManyWithoutAddresses_orders_shipping_address_idToaddressesInput
  }

  export type addressesCreateOrConnectWithoutUsersInput = {
    where: addressesWhereUniqueInput
    create: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput>
  }

  export type addressesCreateManyUsersInputEnvelope = {
    data: addressesCreateManyUsersInput | addressesCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type cartsCreateWithoutUsersInput = {
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsCreateNestedManyWithoutCartsInput
  }

  export type cartsUncheckedCreateWithoutUsersInput = {
    id?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
    cart_items?: cart_itemsUncheckedCreateNestedManyWithoutCartsInput
  }

  export type cartsCreateOrConnectWithoutUsersInput = {
    where: cartsWhereUniqueInput
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsCreateManyUsersInputEnvelope = {
    data: cartsCreateManyUsersInput | cartsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type ordersCreateWithoutUsersInput = {
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsCreateNestedManyWithoutOrdersInput
    addresses_orders_billing_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_billing_address_idToaddressesInput
    addresses_orders_shipping_address_idToaddresses?: addressesCreateNestedOneWithoutOrders_orders_shipping_address_idToaddressesInput
  }

  export type ordersUncheckedCreateWithoutUsersInput = {
    id?: number
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
    order_items?: order_itemsUncheckedCreateNestedManyWithoutOrdersInput
  }

  export type ordersCreateOrConnectWithoutUsersInput = {
    where: ordersWhereUniqueInput
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersCreateManyUsersInputEnvelope = {
    data: ordersCreateManyUsersInput | ordersCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type product_reviewsCreateWithoutUsersInput = {
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
    products?: productsCreateNestedOneWithoutProduct_reviewsInput
  }

  export type product_reviewsUncheckedCreateWithoutUsersInput = {
    id?: number
    product_id?: number | null
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
  }

  export type product_reviewsCreateOrConnectWithoutUsersInput = {
    where: product_reviewsWhereUniqueInput
    create: XOR<product_reviewsCreateWithoutUsersInput, product_reviewsUncheckedCreateWithoutUsersInput>
  }

  export type product_reviewsCreateManyUsersInputEnvelope = {
    data: product_reviewsCreateManyUsersInput | product_reviewsCreateManyUsersInput[]
    skipDuplicates?: boolean
  }

  export type addressesUpsertWithWhereUniqueWithoutUsersInput = {
    where: addressesWhereUniqueInput
    update: XOR<addressesUpdateWithoutUsersInput, addressesUncheckedUpdateWithoutUsersInput>
    create: XOR<addressesCreateWithoutUsersInput, addressesUncheckedCreateWithoutUsersInput>
  }

  export type addressesUpdateWithWhereUniqueWithoutUsersInput = {
    where: addressesWhereUniqueInput
    data: XOR<addressesUpdateWithoutUsersInput, addressesUncheckedUpdateWithoutUsersInput>
  }

  export type addressesUpdateManyWithWhereWithoutUsersInput = {
    where: addressesScalarWhereInput
    data: XOR<addressesUpdateManyMutationInput, addressesUncheckedUpdateManyWithoutUsersInput>
  }

  export type addressesScalarWhereInput = {
    AND?: addressesScalarWhereInput | addressesScalarWhereInput[]
    OR?: addressesScalarWhereInput[]
    NOT?: addressesScalarWhereInput | addressesScalarWhereInput[]
    id?: IntFilter<"addresses"> | number
    user_id?: IntNullableFilter<"addresses"> | number | null
    street?: StringFilter<"addresses"> | string
    city?: StringFilter<"addresses"> | string
    state?: StringNullableFilter<"addresses"> | string | null
    country?: StringFilter<"addresses"> | string
    postal_code?: StringFilter<"addresses"> | string
    is_default?: BoolNullableFilter<"addresses"> | boolean | null
    created_at?: DateTimeNullableFilter<"addresses"> | Date | string | null
  }

  export type cartsUpsertWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    update: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
    create: XOR<cartsCreateWithoutUsersInput, cartsUncheckedCreateWithoutUsersInput>
  }

  export type cartsUpdateWithWhereUniqueWithoutUsersInput = {
    where: cartsWhereUniqueInput
    data: XOR<cartsUpdateWithoutUsersInput, cartsUncheckedUpdateWithoutUsersInput>
  }

  export type cartsUpdateManyWithWhereWithoutUsersInput = {
    where: cartsScalarWhereInput
    data: XOR<cartsUpdateManyMutationInput, cartsUncheckedUpdateManyWithoutUsersInput>
  }

  export type cartsScalarWhereInput = {
    AND?: cartsScalarWhereInput | cartsScalarWhereInput[]
    OR?: cartsScalarWhereInput[]
    NOT?: cartsScalarWhereInput | cartsScalarWhereInput[]
    id?: IntFilter<"carts"> | number
    user_id?: IntNullableFilter<"carts"> | number | null
    created_at?: DateTimeNullableFilter<"carts"> | Date | string | null
    updated_at?: DateTimeNullableFilter<"carts"> | Date | string | null
  }

  export type ordersUpsertWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    update: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
    create: XOR<ordersCreateWithoutUsersInput, ordersUncheckedCreateWithoutUsersInput>
  }

  export type ordersUpdateWithWhereUniqueWithoutUsersInput = {
    where: ordersWhereUniqueInput
    data: XOR<ordersUpdateWithoutUsersInput, ordersUncheckedUpdateWithoutUsersInput>
  }

  export type ordersUpdateManyWithWhereWithoutUsersInput = {
    where: ordersScalarWhereInput
    data: XOR<ordersUpdateManyMutationInput, ordersUncheckedUpdateManyWithoutUsersInput>
  }

  export type product_reviewsUpsertWithWhereUniqueWithoutUsersInput = {
    where: product_reviewsWhereUniqueInput
    update: XOR<product_reviewsUpdateWithoutUsersInput, product_reviewsUncheckedUpdateWithoutUsersInput>
    create: XOR<product_reviewsCreateWithoutUsersInput, product_reviewsUncheckedCreateWithoutUsersInput>
  }

  export type product_reviewsUpdateWithWhereUniqueWithoutUsersInput = {
    where: product_reviewsWhereUniqueInput
    data: XOR<product_reviewsUpdateWithoutUsersInput, product_reviewsUncheckedUpdateWithoutUsersInput>
  }

  export type product_reviewsUpdateManyWithWhereWithoutUsersInput = {
    where: product_reviewsScalarWhereInput
    data: XOR<product_reviewsUpdateManyMutationInput, product_reviewsUncheckedUpdateManyWithoutUsersInput>
  }

  export type ordersCreateManyAddresses_orders_billing_address_idToaddressesInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersCreateManyAddresses_orders_shipping_address_idToaddressesInput = {
    id?: number
    user_id?: number | null
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersUpdateWithoutAddresses_orders_billing_address_idToaddressesInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    addresses_orders_shipping_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_shipping_address_idToaddressesNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutAddresses_orders_billing_address_idToaddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutAddresses_orders_billing_address_idToaddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    addresses_orders_billing_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_billing_address_idToaddressesNestedInput
    users?: usersUpdateOneWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsCreateManyCartsInput = {
    id?: number
    product_id?: number | null
    variant_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type cart_itemsUpdateWithoutCartsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneWithoutCart_itemsNestedInput
    product_variants?: product_variantsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutCartsInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type categoriesCreateManyCategoriesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    created_at?: Date | string | null
  }

  export type productsCreateManyCategoriesInput = {
    id?: number
    name: string
    slug: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    discount_price?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    is_featured?: boolean | null
    is_active?: boolean | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type categoriesUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUpdateManyWithoutCategoriesNestedInput
    products?: productsUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    other_categories?: categoriesUncheckedUpdateManyWithoutCategoriesNestedInput
    products?: productsUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type categoriesUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type productsUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProductsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProductsNestedInput
    product_images?: product_imagesUncheckedUpdateManyWithoutProductsNestedInput
    product_reviews?: product_reviewsUncheckedUpdateManyWithoutProductsNestedInput
    product_variants?: product_variantsUncheckedUpdateManyWithoutProductsNestedInput
  }

  export type productsUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    discount_price?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    is_featured?: NullableBoolFieldUpdateOperationsInput | boolean | null
    is_active?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsCreateManyOrdersInput = {
    id?: number
    product_id?: number | null
    variant_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type order_itemsUpdateWithoutOrdersInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
    product_variants?: product_variantsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutOrdersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsCreateManyProduct_variantsInput = {
    id?: number
    cart_id?: number | null
    product_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type order_itemsCreateManyProduct_variantsInput = {
    id?: number
    order_id?: number | null
    product_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type cart_itemsUpdateWithoutProduct_variantsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput
    products?: productsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutProduct_variantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutProduct_variantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUpdateWithoutProduct_variantsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
    products?: productsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProduct_variantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutProduct_variantsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsCreateManyProductsInput = {
    id?: number
    cart_id?: number | null
    variant_id?: number | null
    quantity?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type order_itemsCreateManyProductsInput = {
    id?: number
    order_id?: number | null
    variant_id?: number | null
    product_name: string
    variant_description?: string | null
    price: Decimal | DecimalJsLike | number | string
    quantity: number
    total_price: Decimal | DecimalJsLike | number | string
    created_at?: Date | string | null
  }

  export type product_imagesCreateManyProductsInput = {
    id?: number
    url: string
    alt_text?: string | null
    is_primary?: boolean | null
    created_at?: Date | string | null
  }

  export type product_reviewsCreateManyProductsInput = {
    id?: number
    user_id?: number | null
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
  }

  export type product_variantsCreateManyProductsInput = {
    id?: number
    name: string
    value: string
    price_adjustment?: Decimal | DecimalJsLike | number | string | null
    stock_quantity?: number
    sku?: string | null
    created_at?: Date | string | null
  }

  export type cart_itemsUpdateWithoutProductsInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    carts?: cartsUpdateOneWithoutCart_itemsNestedInput
    product_variants?: product_variantsUpdateOneWithoutCart_itemsNestedInput
  }

  export type cart_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cart_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    cart_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    quantity?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUpdateWithoutProductsInput = {
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders?: ordersUpdateOneWithoutOrder_itemsNestedInput
    product_variants?: product_variantsUpdateOneWithoutOrder_itemsNestedInput
  }

  export type order_itemsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type order_itemsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_id?: NullableIntFieldUpdateOperationsInput | number | null
    variant_id?: NullableIntFieldUpdateOperationsInput | number | null
    product_name?: StringFieldUpdateOperationsInput | string
    variant_description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    quantity?: IntFieldUpdateOperationsInput | number
    total_price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_imagesUpdateWithoutProductsInput = {
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_imagesUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_imagesUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    url?: StringFieldUpdateOperationsInput | string
    alt_text?: NullableStringFieldUpdateOperationsInput | string | null
    is_primary?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsUpdateWithoutProductsInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    users?: usersUpdateOneWithoutProduct_reviewsNestedInput
  }

  export type product_reviewsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    user_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_variantsUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutProduct_variantsNestedInput
    order_items?: order_itemsUpdateManyWithoutProduct_variantsNestedInput
  }

  export type product_variantsUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput
    order_items?: order_itemsUncheckedUpdateManyWithoutProduct_variantsNestedInput
  }

  export type product_variantsUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    price_adjustment?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    stock_quantity?: IntFieldUpdateOperationsInput | number
    sku?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type addressesCreateManyUsersInput = {
    id?: number
    street: string
    city: string
    state?: string | null
    country: string
    postal_code: string
    is_default?: boolean | null
    created_at?: Date | string | null
  }

  export type cartsCreateManyUsersInput = {
    id?: number
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type ordersCreateManyUsersInput = {
    id?: number
    order_number: string
    status?: string
    total_amount: Decimal | DecimalJsLike | number | string
    shipping_address_id?: number | null
    billing_address_id?: number | null
    payment_method: string
    payment_status?: string | null
    tracking_number?: string | null
    notes?: string | null
    created_at?: Date | string | null
    updated_at?: Date | string | null
  }

  export type product_reviewsCreateManyUsersInput = {
    id?: number
    product_id?: number | null
    rating: number
    comment?: string | null
    is_approved?: boolean | null
    created_at?: Date | string | null
  }

  export type addressesUpdateWithoutUsersInput = {
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput
    orders_orders_shipping_address_idToaddresses?: ordersUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput
  }

  export type addressesUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    orders_orders_billing_address_idToaddresses?: ordersUncheckedUpdateManyWithoutAddresses_orders_billing_address_idToaddressesNestedInput
    orders_orders_shipping_address_idToaddresses?: ordersUncheckedUpdateManyWithoutAddresses_orders_shipping_address_idToaddressesNestedInput
  }

  export type addressesUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    street?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    state?: NullableStringFieldUpdateOperationsInput | string | null
    country?: StringFieldUpdateOperationsInput | string
    postal_code?: StringFieldUpdateOperationsInput | string
    is_default?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type cartsUpdateWithoutUsersInput = {
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    cart_items?: cart_itemsUncheckedUpdateManyWithoutCartsNestedInput
  }

  export type cartsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ordersUpdateWithoutUsersInput = {
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUpdateManyWithoutOrdersNestedInput
    addresses_orders_billing_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_billing_address_idToaddressesNestedInput
    addresses_orders_shipping_address_idToaddresses?: addressesUpdateOneWithoutOrders_orders_shipping_address_idToaddressesNestedInput
  }

  export type ordersUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    order_items?: order_itemsUncheckedUpdateManyWithoutOrdersNestedInput
  }

  export type ordersUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    order_number?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    total_amount?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    shipping_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    billing_address_id?: NullableIntFieldUpdateOperationsInput | number | null
    payment_method?: StringFieldUpdateOperationsInput | string
    payment_status?: NullableStringFieldUpdateOperationsInput | string | null
    tracking_number?: NullableStringFieldUpdateOperationsInput | string | null
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updated_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsUpdateWithoutUsersInput = {
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    products?: productsUpdateOneWithoutProduct_reviewsNestedInput
  }

  export type product_reviewsUncheckedUpdateWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type product_reviewsUncheckedUpdateManyWithoutUsersInput = {
    id?: IntFieldUpdateOperationsInput | number
    product_id?: NullableIntFieldUpdateOperationsInput | number | null
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    is_approved?: NullableBoolFieldUpdateOperationsInput | boolean | null
    created_at?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}