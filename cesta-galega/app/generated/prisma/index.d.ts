
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Business
 * 
 */
export type Business = $Result.DefaultSelection<Prisma.$BusinessPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model UserProduct
 * 
 */
export type UserProduct = $Result.DefaultSelection<Prisma.$UserProductPayload>
/**
 * Model Order
 * 
 */
export type Order = $Result.DefaultSelection<Prisma.$OrderPayload>
/**
 * Model OrderProduct
 * 
 */
export type OrderProduct = $Result.DefaultSelection<Prisma.$OrderProductPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.business`: Exposes CRUD operations for the **Business** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Businesses
    * const businesses = await prisma.business.findMany()
    * ```
    */
  get business(): Prisma.BusinessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userProduct`: Exposes CRUD operations for the **UserProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserProducts
    * const userProducts = await prisma.userProduct.findMany()
    * ```
    */
  get userProduct(): Prisma.UserProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.order`: Exposes CRUD operations for the **Order** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Orders
    * const orders = await prisma.order.findMany()
    * ```
    */
  get order(): Prisma.OrderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.orderProduct`: Exposes CRUD operations for the **OrderProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more OrderProducts
    * const orderProducts = await prisma.orderProduct.findMany()
    * ```
    */
  get orderProduct(): Prisma.OrderProductDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.17.1
   * Query Engine version: 272a37d34178c2894197e17273bf937f25acdeac
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
    User: 'User',
    Business: 'Business',
    Product: 'Product',
    Category: 'Category',
    UserProduct: 'UserProduct',
    Order: 'Order',
    OrderProduct: 'OrderProduct'
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
      modelProps: "user" | "business" | "product" | "category" | "userProduct" | "order" | "orderProduct"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Business: {
        payload: Prisma.$BusinessPayload<ExtArgs>
        fields: Prisma.BusinessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.BusinessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.BusinessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findFirst: {
            args: Prisma.BusinessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.BusinessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          findMany: {
            args: Prisma.BusinessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          create: {
            args: Prisma.BusinessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          createMany: {
            args: Prisma.BusinessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.BusinessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          delete: {
            args: Prisma.BusinessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          update: {
            args: Prisma.BusinessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          deleteMany: {
            args: Prisma.BusinessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.BusinessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.BusinessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>[]
          }
          upsert: {
            args: Prisma.BusinessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$BusinessPayload>
          }
          aggregate: {
            args: Prisma.BusinessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateBusiness>
          }
          groupBy: {
            args: Prisma.BusinessGroupByArgs<ExtArgs>
            result: $Utils.Optional<BusinessGroupByOutputType>[]
          }
          count: {
            args: Prisma.BusinessCountArgs<ExtArgs>
            result: $Utils.Optional<BusinessCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      UserProduct: {
        payload: Prisma.$UserProductPayload<ExtArgs>
        fields: Prisma.UserProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          findFirst: {
            args: Prisma.UserProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          findMany: {
            args: Prisma.UserProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>[]
          }
          create: {
            args: Prisma.UserProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          createMany: {
            args: Prisma.UserProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>[]
          }
          delete: {
            args: Prisma.UserProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          update: {
            args: Prisma.UserProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          deleteMany: {
            args: Prisma.UserProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>[]
          }
          upsert: {
            args: Prisma.UserProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserProductPayload>
          }
          aggregate: {
            args: Prisma.UserProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserProduct>
          }
          groupBy: {
            args: Prisma.UserProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserProductCountArgs<ExtArgs>
            result: $Utils.Optional<UserProductCountAggregateOutputType> | number
          }
        }
      }
      Order: {
        payload: Prisma.$OrderPayload<ExtArgs>
        fields: Prisma.OrderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findFirst: {
            args: Prisma.OrderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          findMany: {
            args: Prisma.OrderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          create: {
            args: Prisma.OrderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          createMany: {
            args: Prisma.OrderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          delete: {
            args: Prisma.OrderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          update: {
            args: Prisma.OrderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          deleteMany: {
            args: Prisma.OrderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>[]
          }
          upsert: {
            args: Prisma.OrderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderPayload>
          }
          aggregate: {
            args: Prisma.OrderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrder>
          }
          groupBy: {
            args: Prisma.OrderGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderCountArgs<ExtArgs>
            result: $Utils.Optional<OrderCountAggregateOutputType> | number
          }
        }
      }
      OrderProduct: {
        payload: Prisma.$OrderProductPayload<ExtArgs>
        fields: Prisma.OrderProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrderProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrderProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findFirst: {
            args: Prisma.OrderProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrderProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          findMany: {
            args: Prisma.OrderProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          create: {
            args: Prisma.OrderProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          createMany: {
            args: Prisma.OrderProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrderProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          delete: {
            args: Prisma.OrderProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          update: {
            args: Prisma.OrderProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          deleteMany: {
            args: Prisma.OrderProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrderProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrderProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>[]
          }
          upsert: {
            args: Prisma.OrderProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrderProductPayload>
          }
          aggregate: {
            args: Prisma.OrderProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrderProduct>
          }
          groupBy: {
            args: Prisma.OrderProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrderProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrderProductCountArgs<ExtArgs>
            result: $Utils.Optional<OrderProductCountAggregateOutputType> | number
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
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
    user?: UserOmit
    business?: BusinessOmit
    product?: ProductOmit
    category?: CategoryOmit
    userProduct?: UserProductOmit
    order?: OrderOmit
    orderProduct?: OrderProductOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    UserProduct: number
    Order: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserProduct?: boolean | UserCountOutputTypeCountUserProductArgs
    Order?: boolean | UserCountOutputTypeCountOrderArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountOrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
  }


  /**
   * Count Type BusinessCountOutputType
   */

  export type BusinessCountOutputType = {
    product: number
  }

  export type BusinessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | BusinessCountOutputTypeCountProductArgs
  }

  // Custom InputTypes
  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the BusinessCountOutputType
     */
    select?: BusinessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * BusinessCountOutputType without action
   */
  export type BusinessCountOutputTypeCountProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    categories: number
    UserProduct: number
    OrderProduct: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    categories?: boolean | ProductCountOutputTypeCountCategoriesArgs
    UserProduct?: boolean | ProductCountOutputTypeCountUserProductArgs
    OrderProduct?: boolean | ProductCountOutputTypeCountOrderProductArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCategoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountUserProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountOrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    products: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | CategoryCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type OrderCountOutputType
   */

  export type OrderCountOutputType = {
    OrderProduct: number
  }

  export type OrderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    OrderProduct?: boolean | OrderCountOutputTypeCountOrderProductArgs
  }

  // Custom InputTypes
  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderCountOutputType
     */
    select?: OrderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrderCountOutputType without action
   */
  export type OrderCountOutputTypeCountOrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    sex: string | null
    birthDate: Date | null
    province: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    sex: string | null
    birthDate: Date | null
    province: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    sex: number
    birthDate: number
    province: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    sex?: true
    birthDate?: true
    province?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    sex?: true
    birthDate?: true
    province?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    sex?: true
    birthDate?: true
    province?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: number
    name: string
    email: string
    sex: string
    birthDate: Date
    province: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    sex?: boolean
    birthDate?: boolean
    province?: boolean
    password?: boolean
    createdAt?: boolean
    UserProduct?: boolean | User$UserProductArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    sex?: boolean
    birthDate?: boolean
    province?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    sex?: boolean
    birthDate?: boolean
    province?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    sex?: boolean
    birthDate?: boolean
    province?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "sex" | "birthDate" | "province" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    UserProduct?: boolean | User$UserProductArgs<ExtArgs>
    Order?: boolean | User$OrderArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      UserProduct: Prisma.$UserProductPayload<ExtArgs>[]
      Order: Prisma.$OrderPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      sex: string
      birthDate: Date
      province: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    UserProduct<T extends User$UserProductArgs<ExtArgs> = {}>(args?: Subset<T, User$UserProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    Order<T extends User$OrderArgs<ExtArgs> = {}>(args?: Subset<T, User$OrderArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'Int'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly sex: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
    readonly province: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.UserProduct
   */
  export type User$UserProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    where?: UserProductWhereInput
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    cursor?: UserProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * User.Order
   */
  export type User$OrderArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    cursor?: OrderWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Business
   */

  export type AggregateBusiness = {
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  export type BusinessAvgAggregateOutputType = {
    id: number | null
  }

  export type BusinessSumAggregateOutputType = {
    id: number | null
  }

  export type BusinessMinAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    description: string | null
    businessType: string | null
    phoneNumber: string | null
    address: string | null
    city: string | null
    province: string | null
    postalCode: string | null
    password: string | null
    createdAt: Date | null
  }

  export type BusinessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    email: string | null
    description: string | null
    businessType: string | null
    phoneNumber: string | null
    address: string | null
    city: string | null
    province: string | null
    postalCode: string | null
    password: string | null
    createdAt: Date | null
  }

  export type BusinessCountAggregateOutputType = {
    id: number
    name: number
    email: number
    description: number
    businessType: number
    phoneNumber: number
    address: number
    city: number
    province: number
    postalCode: number
    password: number
    createdAt: number
    _all: number
  }


  export type BusinessAvgAggregateInputType = {
    id?: true
  }

  export type BusinessSumAggregateInputType = {
    id?: true
  }

  export type BusinessMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    businessType?: true
    phoneNumber?: true
    address?: true
    city?: true
    province?: true
    postalCode?: true
    password?: true
    createdAt?: true
  }

  export type BusinessMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    businessType?: true
    phoneNumber?: true
    address?: true
    city?: true
    province?: true
    postalCode?: true
    password?: true
    createdAt?: true
  }

  export type BusinessCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    description?: true
    businessType?: true
    phoneNumber?: true
    address?: true
    city?: true
    province?: true
    postalCode?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type BusinessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Business to aggregate.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Businesses
    **/
    _count?: true | BusinessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: BusinessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: BusinessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: BusinessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: BusinessMaxAggregateInputType
  }

  export type GetBusinessAggregateType<T extends BusinessAggregateArgs> = {
        [P in keyof T & keyof AggregateBusiness]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateBusiness[P]>
      : GetScalarType<T[P], AggregateBusiness[P]>
  }




  export type BusinessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: BusinessWhereInput
    orderBy?: BusinessOrderByWithAggregationInput | BusinessOrderByWithAggregationInput[]
    by: BusinessScalarFieldEnum[] | BusinessScalarFieldEnum
    having?: BusinessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: BusinessCountAggregateInputType | true
    _avg?: BusinessAvgAggregateInputType
    _sum?: BusinessSumAggregateInputType
    _min?: BusinessMinAggregateInputType
    _max?: BusinessMaxAggregateInputType
  }

  export type BusinessGroupByOutputType = {
    id: number
    name: string
    email: string
    description: string | null
    businessType: string
    phoneNumber: string
    address: string
    city: string
    province: string
    postalCode: string
    password: string
    createdAt: Date
    _count: BusinessCountAggregateOutputType | null
    _avg: BusinessAvgAggregateOutputType | null
    _sum: BusinessSumAggregateOutputType | null
    _min: BusinessMinAggregateOutputType | null
    _max: BusinessMaxAggregateOutputType | null
  }

  type GetBusinessGroupByPayload<T extends BusinessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<BusinessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof BusinessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], BusinessGroupByOutputType[P]>
            : GetScalarType<T[P], BusinessGroupByOutputType[P]>
        }
      >
    >


  export type BusinessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    businessType?: boolean
    phoneNumber?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    password?: boolean
    createdAt?: boolean
    product?: boolean | Business$productArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    businessType?: boolean
    phoneNumber?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    businessType?: boolean
    phoneNumber?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["business"]>

  export type BusinessSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    description?: boolean
    businessType?: boolean
    phoneNumber?: boolean
    address?: boolean
    city?: boolean
    province?: boolean
    postalCode?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type BusinessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "description" | "businessType" | "phoneNumber" | "address" | "city" | "province" | "postalCode" | "password" | "createdAt", ExtArgs["result"]["business"]>
  export type BusinessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | Business$productArgs<ExtArgs>
    _count?: boolean | BusinessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type BusinessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type BusinessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $BusinessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Business"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      email: string
      description: string | null
      businessType: string
      phoneNumber: string
      address: string
      city: string
      province: string
      postalCode: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["business"]>
    composites: {}
  }

  type BusinessGetPayload<S extends boolean | null | undefined | BusinessDefaultArgs> = $Result.GetResult<Prisma.$BusinessPayload, S>

  type BusinessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<BusinessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: BusinessCountAggregateInputType | true
    }

  export interface BusinessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Business'], meta: { name: 'Business' } }
    /**
     * Find zero or one Business that matches the filter.
     * @param {BusinessFindUniqueArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends BusinessFindUniqueArgs>(args: SelectSubset<T, BusinessFindUniqueArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Business that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {BusinessFindUniqueOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends BusinessFindUniqueOrThrowArgs>(args: SelectSubset<T, BusinessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends BusinessFindFirstArgs>(args?: SelectSubset<T, BusinessFindFirstArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Business that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindFirstOrThrowArgs} args - Arguments to find a Business
     * @example
     * // Get one Business
     * const business = await prisma.business.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends BusinessFindFirstOrThrowArgs>(args?: SelectSubset<T, BusinessFindFirstOrThrowArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Businesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Businesses
     * const businesses = await prisma.business.findMany()
     * 
     * // Get first 10 Businesses
     * const businesses = await prisma.business.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const businessWithIdOnly = await prisma.business.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends BusinessFindManyArgs>(args?: SelectSubset<T, BusinessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Business.
     * @param {BusinessCreateArgs} args - Arguments to create a Business.
     * @example
     * // Create one Business
     * const Business = await prisma.business.create({
     *   data: {
     *     // ... data to create a Business
     *   }
     * })
     * 
     */
    create<T extends BusinessCreateArgs>(args: SelectSubset<T, BusinessCreateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Businesses.
     * @param {BusinessCreateManyArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends BusinessCreateManyArgs>(args?: SelectSubset<T, BusinessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Businesses and returns the data saved in the database.
     * @param {BusinessCreateManyAndReturnArgs} args - Arguments to create many Businesses.
     * @example
     * // Create many Businesses
     * const business = await prisma.business.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends BusinessCreateManyAndReturnArgs>(args?: SelectSubset<T, BusinessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Business.
     * @param {BusinessDeleteArgs} args - Arguments to delete one Business.
     * @example
     * // Delete one Business
     * const Business = await prisma.business.delete({
     *   where: {
     *     // ... filter to delete one Business
     *   }
     * })
     * 
     */
    delete<T extends BusinessDeleteArgs>(args: SelectSubset<T, BusinessDeleteArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Business.
     * @param {BusinessUpdateArgs} args - Arguments to update one Business.
     * @example
     * // Update one Business
     * const business = await prisma.business.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends BusinessUpdateArgs>(args: SelectSubset<T, BusinessUpdateArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Businesses.
     * @param {BusinessDeleteManyArgs} args - Arguments to filter Businesses to delete.
     * @example
     * // Delete a few Businesses
     * const { count } = await prisma.business.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends BusinessDeleteManyArgs>(args?: SelectSubset<T, BusinessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends BusinessUpdateManyArgs>(args: SelectSubset<T, BusinessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Businesses and returns the data updated in the database.
     * @param {BusinessUpdateManyAndReturnArgs} args - Arguments to update many Businesses.
     * @example
     * // Update many Businesses
     * const business = await prisma.business.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Businesses and only return the `id`
     * const businessWithIdOnly = await prisma.business.updateManyAndReturn({
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
    updateManyAndReturn<T extends BusinessUpdateManyAndReturnArgs>(args: SelectSubset<T, BusinessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Business.
     * @param {BusinessUpsertArgs} args - Arguments to update or create a Business.
     * @example
     * // Update or create a Business
     * const business = await prisma.business.upsert({
     *   create: {
     *     // ... data to create a Business
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Business we want to update
     *   }
     * })
     */
    upsert<T extends BusinessUpsertArgs>(args: SelectSubset<T, BusinessUpsertArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Businesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessCountArgs} args - Arguments to filter Businesses to count.
     * @example
     * // Count the number of Businesses
     * const count = await prisma.business.count({
     *   where: {
     *     // ... the filter for the Businesses we want to count
     *   }
     * })
    **/
    count<T extends BusinessCountArgs>(
      args?: Subset<T, BusinessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], BusinessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends BusinessAggregateArgs>(args: Subset<T, BusinessAggregateArgs>): Prisma.PrismaPromise<GetBusinessAggregateType<T>>

    /**
     * Group by Business.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {BusinessGroupByArgs} args - Group by arguments.
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
      T extends BusinessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: BusinessGroupByArgs['orderBy'] }
        : { orderBy?: BusinessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, BusinessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetBusinessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Business model
   */
  readonly fields: BusinessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Business.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__BusinessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends Business$productArgs<ExtArgs> = {}>(args?: Subset<T, Business$productArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Business model
   */
  interface BusinessFieldRefs {
    readonly id: FieldRef<"Business", 'Int'>
    readonly name: FieldRef<"Business", 'String'>
    readonly email: FieldRef<"Business", 'String'>
    readonly description: FieldRef<"Business", 'String'>
    readonly businessType: FieldRef<"Business", 'String'>
    readonly phoneNumber: FieldRef<"Business", 'String'>
    readonly address: FieldRef<"Business", 'String'>
    readonly city: FieldRef<"Business", 'String'>
    readonly province: FieldRef<"Business", 'String'>
    readonly postalCode: FieldRef<"Business", 'String'>
    readonly password: FieldRef<"Business", 'String'>
    readonly createdAt: FieldRef<"Business", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Business findUnique
   */
  export type BusinessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findUniqueOrThrow
   */
  export type BusinessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business findFirst
   */
  export type BusinessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findFirstOrThrow
   */
  export type BusinessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Business to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Businesses.
     */
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business findMany
   */
  export type BusinessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter, which Businesses to fetch.
     */
    where?: BusinessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Businesses to fetch.
     */
    orderBy?: BusinessOrderByWithRelationInput | BusinessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Businesses.
     */
    cursor?: BusinessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Businesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Businesses.
     */
    skip?: number
    distinct?: BusinessScalarFieldEnum | BusinessScalarFieldEnum[]
  }

  /**
   * Business create
   */
  export type BusinessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to create a Business.
     */
    data: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
  }

  /**
   * Business createMany
   */
  export type BusinessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business createManyAndReturn
   */
  export type BusinessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to create many Businesses.
     */
    data: BusinessCreateManyInput | BusinessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Business update
   */
  export type BusinessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The data needed to update a Business.
     */
    data: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
    /**
     * Choose, which Business to update.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business updateMany
   */
  export type BusinessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business updateManyAndReturn
   */
  export type BusinessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * The data used to update Businesses.
     */
    data: XOR<BusinessUpdateManyMutationInput, BusinessUncheckedUpdateManyInput>
    /**
     * Filter which Businesses to update
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to update.
     */
    limit?: number
  }

  /**
   * Business upsert
   */
  export type BusinessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * The filter to search for the Business to update in case it exists.
     */
    where: BusinessWhereUniqueInput
    /**
     * In case the Business found by the `where` argument doesn't exist, create a new Business with this data.
     */
    create: XOR<BusinessCreateInput, BusinessUncheckedCreateInput>
    /**
     * In case the Business was found with the provided `where` argument, update it with this data.
     */
    update: XOR<BusinessUpdateInput, BusinessUncheckedUpdateInput>
  }

  /**
   * Business delete
   */
  export type BusinessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
    /**
     * Filter which Business to delete.
     */
    where: BusinessWhereUniqueInput
  }

  /**
   * Business deleteMany
   */
  export type BusinessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Businesses to delete
     */
    where?: BusinessWhereInput
    /**
     * Limit how many Businesses to delete.
     */
    limit?: number
  }

  /**
   * Business.product
   */
  export type Business$productArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Business without action
   */
  export type BusinessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Business
     */
    select?: BusinessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Business
     */
    omit?: BusinessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: BusinessInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    businessId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    price: number | null
    discount: number | null
    businessId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    enabled: boolean | null
    price: number | null
    discounted: boolean | null
    discount: number | null
    deleted: boolean | null
    createdAt: Date | null
    businessId: number | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    image: string | null
    enabled: boolean | null
    price: number | null
    discounted: boolean | null
    discount: number | null
    deleted: boolean | null
    createdAt: Date | null
    businessId: number | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    name: number
    description: number
    image: number
    enabled: number
    price: number
    discounted: number
    discount: number
    deleted: number
    createdAt: number
    businessId: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    businessId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    price?: true
    discount?: true
    businessId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    enabled?: true
    price?: true
    discounted?: true
    discount?: true
    deleted?: true
    createdAt?: true
    businessId?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    enabled?: true
    price?: true
    discounted?: true
    discount?: true
    deleted?: true
    createdAt?: true
    businessId?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    image?: true
    enabled?: true
    price?: true
    discounted?: true
    discount?: true
    deleted?: true
    createdAt?: true
    businessId?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    name: string
    description: string
    image: string
    enabled: boolean | null
    price: number | null
    discounted: boolean | null
    discount: number | null
    deleted: boolean | null
    createdAt: Date
    businessId: number
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    enabled?: boolean
    price?: boolean
    discounted?: boolean
    discount?: boolean
    deleted?: boolean
    createdAt?: boolean
    businessId?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    UserProduct?: boolean | Product$UserProductArgs<ExtArgs>
    OrderProduct?: boolean | Product$OrderProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    enabled?: boolean
    price?: boolean
    discounted?: boolean
    discount?: boolean
    deleted?: boolean
    createdAt?: boolean
    businessId?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    enabled?: boolean
    price?: boolean
    discounted?: boolean
    discount?: boolean
    deleted?: boolean
    createdAt?: boolean
    businessId?: boolean
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    image?: boolean
    enabled?: boolean
    price?: boolean
    discounted?: boolean
    discount?: boolean
    deleted?: boolean
    createdAt?: boolean
    businessId?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "image" | "enabled" | "price" | "discounted" | "discount" | "deleted" | "createdAt" | "businessId", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
    categories?: boolean | Product$categoriesArgs<ExtArgs>
    UserProduct?: boolean | Product$UserProductArgs<ExtArgs>
    OrderProduct?: boolean | Product$OrderProductArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    business?: boolean | BusinessDefaultArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      business: Prisma.$BusinessPayload<ExtArgs>
      categories: Prisma.$CategoryPayload<ExtArgs>[]
      UserProduct: Prisma.$UserProductPayload<ExtArgs>[]
      OrderProduct: Prisma.$OrderProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      description: string
      image: string
      enabled: boolean | null
      price: number | null
      discounted: boolean | null
      discount: number | null
      deleted: boolean | null
      createdAt: Date
      businessId: number
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    business<T extends BusinessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, BusinessDefaultArgs<ExtArgs>>): Prisma__BusinessClient<$Result.GetResult<Prisma.$BusinessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    categories<T extends Product$categoriesArgs<ExtArgs> = {}>(args?: Subset<T, Product$categoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    UserProduct<T extends Product$UserProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$UserProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    OrderProduct<T extends Product$OrderProductArgs<ExtArgs> = {}>(args?: Subset<T, Product$OrderProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly name: FieldRef<"Product", 'String'>
    readonly description: FieldRef<"Product", 'String'>
    readonly image: FieldRef<"Product", 'String'>
    readonly enabled: FieldRef<"Product", 'Boolean'>
    readonly price: FieldRef<"Product", 'Float'>
    readonly discounted: FieldRef<"Product", 'Boolean'>
    readonly discount: FieldRef<"Product", 'Float'>
    readonly deleted: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly businessId: FieldRef<"Product", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.categories
   */
  export type Product$categoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    cursor?: CategoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Product.UserProduct
   */
  export type Product$UserProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    where?: UserProductWhereInput
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    cursor?: UserProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * Product.OrderProduct
   */
  export type Product$OrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    name: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: number
    name: string
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Category$productsArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
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
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Category$productsArgs<ExtArgs> = {}>(args?: Subset<T, Category$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'Int'>
    readonly name: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.products
   */
  export type Category$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model UserProduct
   */

  export type AggregateUserProduct = {
    _count: UserProductCountAggregateOutputType | null
    _avg: UserProductAvgAggregateOutputType | null
    _sum: UserProductSumAggregateOutputType | null
    _min: UserProductMinAggregateOutputType | null
    _max: UserProductMaxAggregateOutputType | null
  }

  export type UserProductAvgAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    productId: number | null
  }

  export type UserProductSumAggregateOutputType = {
    id: number | null
    rating: number | null
    userId: number | null
    productId: number | null
  }

  export type UserProductMinAggregateOutputType = {
    id: number | null
    title: string | null
    review: string | null
    rating: number | null
    createdAt: Date | null
    userId: number | null
    productId: number | null
  }

  export type UserProductMaxAggregateOutputType = {
    id: number | null
    title: string | null
    review: string | null
    rating: number | null
    createdAt: Date | null
    userId: number | null
    productId: number | null
  }

  export type UserProductCountAggregateOutputType = {
    id: number
    title: number
    review: number
    rating: number
    createdAt: number
    userId: number
    productId: number
    _all: number
  }


  export type UserProductAvgAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    productId?: true
  }

  export type UserProductSumAggregateInputType = {
    id?: true
    rating?: true
    userId?: true
    productId?: true
  }

  export type UserProductMinAggregateInputType = {
    id?: true
    title?: true
    review?: true
    rating?: true
    createdAt?: true
    userId?: true
    productId?: true
  }

  export type UserProductMaxAggregateInputType = {
    id?: true
    title?: true
    review?: true
    rating?: true
    createdAt?: true
    userId?: true
    productId?: true
  }

  export type UserProductCountAggregateInputType = {
    id?: true
    title?: true
    review?: true
    rating?: true
    createdAt?: true
    userId?: true
    productId?: true
    _all?: true
  }

  export type UserProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProduct to aggregate.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserProducts
    **/
    _count?: true | UserProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserProductMaxAggregateInputType
  }

  export type GetUserProductAggregateType<T extends UserProductAggregateArgs> = {
        [P in keyof T & keyof AggregateUserProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserProduct[P]>
      : GetScalarType<T[P], AggregateUserProduct[P]>
  }




  export type UserProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserProductWhereInput
    orderBy?: UserProductOrderByWithAggregationInput | UserProductOrderByWithAggregationInput[]
    by: UserProductScalarFieldEnum[] | UserProductScalarFieldEnum
    having?: UserProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserProductCountAggregateInputType | true
    _avg?: UserProductAvgAggregateInputType
    _sum?: UserProductSumAggregateInputType
    _min?: UserProductMinAggregateInputType
    _max?: UserProductMaxAggregateInputType
  }

  export type UserProductGroupByOutputType = {
    id: number
    title: string
    review: string
    rating: number
    createdAt: Date
    userId: number
    productId: number
    _count: UserProductCountAggregateOutputType | null
    _avg: UserProductAvgAggregateOutputType | null
    _sum: UserProductSumAggregateOutputType | null
    _min: UserProductMinAggregateOutputType | null
    _max: UserProductMaxAggregateOutputType | null
  }

  type GetUserProductGroupByPayload<T extends UserProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserProductGroupByOutputType[P]>
            : GetScalarType<T[P], UserProductGroupByOutputType[P]>
        }
      >
    >


  export type UserProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    productId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProduct"]>

  export type UserProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    productId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProduct"]>

  export type UserProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    productId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userProduct"]>

  export type UserProductSelectScalar = {
    id?: boolean
    title?: boolean
    review?: boolean
    rating?: boolean
    createdAt?: boolean
    userId?: boolean
    productId?: boolean
  }

  export type UserProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "review" | "rating" | "createdAt" | "userId" | "productId", ExtArgs["result"]["userProduct"]>
  export type UserProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type UserProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $UserProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserProduct"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string
      review: string
      rating: number
      createdAt: Date
      userId: number
      productId: number
    }, ExtArgs["result"]["userProduct"]>
    composites: {}
  }

  type UserProductGetPayload<S extends boolean | null | undefined | UserProductDefaultArgs> = $Result.GetResult<Prisma.$UserProductPayload, S>

  type UserProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserProductCountAggregateInputType | true
    }

  export interface UserProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserProduct'], meta: { name: 'UserProduct' } }
    /**
     * Find zero or one UserProduct that matches the filter.
     * @param {UserProductFindUniqueArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserProductFindUniqueArgs>(args: SelectSubset<T, UserProductFindUniqueArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserProductFindUniqueOrThrowArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserProductFindUniqueOrThrowArgs>(args: SelectSubset<T, UserProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductFindFirstArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserProductFindFirstArgs>(args?: SelectSubset<T, UserProductFindFirstArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductFindFirstOrThrowArgs} args - Arguments to find a UserProduct
     * @example
     * // Get one UserProduct
     * const userProduct = await prisma.userProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserProductFindFirstOrThrowArgs>(args?: SelectSubset<T, UserProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserProducts
     * const userProducts = await prisma.userProduct.findMany()
     * 
     * // Get first 10 UserProducts
     * const userProducts = await prisma.userProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userProductWithIdOnly = await prisma.userProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserProductFindManyArgs>(args?: SelectSubset<T, UserProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserProduct.
     * @param {UserProductCreateArgs} args - Arguments to create a UserProduct.
     * @example
     * // Create one UserProduct
     * const UserProduct = await prisma.userProduct.create({
     *   data: {
     *     // ... data to create a UserProduct
     *   }
     * })
     * 
     */
    create<T extends UserProductCreateArgs>(args: SelectSubset<T, UserProductCreateArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserProducts.
     * @param {UserProductCreateManyArgs} args - Arguments to create many UserProducts.
     * @example
     * // Create many UserProducts
     * const userProduct = await prisma.userProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserProductCreateManyArgs>(args?: SelectSubset<T, UserProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserProducts and returns the data saved in the database.
     * @param {UserProductCreateManyAndReturnArgs} args - Arguments to create many UserProducts.
     * @example
     * // Create many UserProducts
     * const userProduct = await prisma.userProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserProducts and only return the `id`
     * const userProductWithIdOnly = await prisma.userProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserProductCreateManyAndReturnArgs>(args?: SelectSubset<T, UserProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserProduct.
     * @param {UserProductDeleteArgs} args - Arguments to delete one UserProduct.
     * @example
     * // Delete one UserProduct
     * const UserProduct = await prisma.userProduct.delete({
     *   where: {
     *     // ... filter to delete one UserProduct
     *   }
     * })
     * 
     */
    delete<T extends UserProductDeleteArgs>(args: SelectSubset<T, UserProductDeleteArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserProduct.
     * @param {UserProductUpdateArgs} args - Arguments to update one UserProduct.
     * @example
     * // Update one UserProduct
     * const userProduct = await prisma.userProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserProductUpdateArgs>(args: SelectSubset<T, UserProductUpdateArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserProducts.
     * @param {UserProductDeleteManyArgs} args - Arguments to filter UserProducts to delete.
     * @example
     * // Delete a few UserProducts
     * const { count } = await prisma.userProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserProductDeleteManyArgs>(args?: SelectSubset<T, UserProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserProducts
     * const userProduct = await prisma.userProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserProductUpdateManyArgs>(args: SelectSubset<T, UserProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserProducts and returns the data updated in the database.
     * @param {UserProductUpdateManyAndReturnArgs} args - Arguments to update many UserProducts.
     * @example
     * // Update many UserProducts
     * const userProduct = await prisma.userProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserProducts and only return the `id`
     * const userProductWithIdOnly = await prisma.userProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserProductUpdateManyAndReturnArgs>(args: SelectSubset<T, UserProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserProduct.
     * @param {UserProductUpsertArgs} args - Arguments to update or create a UserProduct.
     * @example
     * // Update or create a UserProduct
     * const userProduct = await prisma.userProduct.upsert({
     *   create: {
     *     // ... data to create a UserProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserProduct we want to update
     *   }
     * })
     */
    upsert<T extends UserProductUpsertArgs>(args: SelectSubset<T, UserProductUpsertArgs<ExtArgs>>): Prisma__UserProductClient<$Result.GetResult<Prisma.$UserProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductCountArgs} args - Arguments to filter UserProducts to count.
     * @example
     * // Count the number of UserProducts
     * const count = await prisma.userProduct.count({
     *   where: {
     *     // ... the filter for the UserProducts we want to count
     *   }
     * })
    **/
    count<T extends UserProductCountArgs>(
      args?: Subset<T, UserProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserProductAggregateArgs>(args: Subset<T, UserProductAggregateArgs>): Prisma.PrismaPromise<GetUserProductAggregateType<T>>

    /**
     * Group by UserProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserProductGroupByArgs} args - Group by arguments.
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
      T extends UserProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserProductGroupByArgs['orderBy'] }
        : { orderBy?: UserProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserProduct model
   */
  readonly fields: UserProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserProduct model
   */
  interface UserProductFieldRefs {
    readonly id: FieldRef<"UserProduct", 'Int'>
    readonly title: FieldRef<"UserProduct", 'String'>
    readonly review: FieldRef<"UserProduct", 'String'>
    readonly rating: FieldRef<"UserProduct", 'Float'>
    readonly createdAt: FieldRef<"UserProduct", 'DateTime'>
    readonly userId: FieldRef<"UserProduct", 'Int'>
    readonly productId: FieldRef<"UserProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * UserProduct findUnique
   */
  export type UserProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct findUniqueOrThrow
   */
  export type UserProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct findFirst
   */
  export type UserProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProducts.
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProducts.
     */
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * UserProduct findFirstOrThrow
   */
  export type UserProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProduct to fetch.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserProducts.
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserProducts.
     */
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * UserProduct findMany
   */
  export type UserProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter, which UserProducts to fetch.
     */
    where?: UserProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserProducts to fetch.
     */
    orderBy?: UserProductOrderByWithRelationInput | UserProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserProducts.
     */
    cursor?: UserProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserProducts.
     */
    skip?: number
    distinct?: UserProductScalarFieldEnum | UserProductScalarFieldEnum[]
  }

  /**
   * UserProduct create
   */
  export type UserProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * The data needed to create a UserProduct.
     */
    data: XOR<UserProductCreateInput, UserProductUncheckedCreateInput>
  }

  /**
   * UserProduct createMany
   */
  export type UserProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserProducts.
     */
    data: UserProductCreateManyInput | UserProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserProduct createManyAndReturn
   */
  export type UserProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * The data used to create many UserProducts.
     */
    data: UserProductCreateManyInput | UserProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProduct update
   */
  export type UserProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * The data needed to update a UserProduct.
     */
    data: XOR<UserProductUpdateInput, UserProductUncheckedUpdateInput>
    /**
     * Choose, which UserProduct to update.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct updateMany
   */
  export type UserProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserProducts.
     */
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyInput>
    /**
     * Filter which UserProducts to update
     */
    where?: UserProductWhereInput
    /**
     * Limit how many UserProducts to update.
     */
    limit?: number
  }

  /**
   * UserProduct updateManyAndReturn
   */
  export type UserProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * The data used to update UserProducts.
     */
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyInput>
    /**
     * Filter which UserProducts to update
     */
    where?: UserProductWhereInput
    /**
     * Limit how many UserProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserProduct upsert
   */
  export type UserProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * The filter to search for the UserProduct to update in case it exists.
     */
    where: UserProductWhereUniqueInput
    /**
     * In case the UserProduct found by the `where` argument doesn't exist, create a new UserProduct with this data.
     */
    create: XOR<UserProductCreateInput, UserProductUncheckedCreateInput>
    /**
     * In case the UserProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserProductUpdateInput, UserProductUncheckedUpdateInput>
  }

  /**
   * UserProduct delete
   */
  export type UserProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
    /**
     * Filter which UserProduct to delete.
     */
    where: UserProductWhereUniqueInput
  }

  /**
   * UserProduct deleteMany
   */
  export type UserProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserProducts to delete
     */
    where?: UserProductWhereInput
    /**
     * Limit how many UserProducts to delete.
     */
    limit?: number
  }

  /**
   * UserProduct without action
   */
  export type UserProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserProduct
     */
    select?: UserProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserProduct
     */
    omit?: UserProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserProductInclude<ExtArgs> | null
  }


  /**
   * Model Order
   */

  export type AggregateOrder = {
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  export type OrderAvgAggregateOutputType = {
    id: number | null
    total: number | null
    userId: number | null
  }

  export type OrderSumAggregateOutputType = {
    id: number | null
    total: number | null
    userId: number | null
  }

  export type OrderMinAggregateOutputType = {
    id: number | null
    status: string | null
    total: number | null
    shippingAddress: string | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrderMaxAggregateOutputType = {
    id: number | null
    status: string | null
    total: number | null
    shippingAddress: string | null
    paymentMethod: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: number | null
  }

  export type OrderCountAggregateOutputType = {
    id: number
    status: number
    total: number
    shippingAddress: number
    paymentMethod: number
    createdAt: number
    updatedAt: number
    userId: number
    _all: number
  }


  export type OrderAvgAggregateInputType = {
    id?: true
    total?: true
    userId?: true
  }

  export type OrderSumAggregateInputType = {
    id?: true
    total?: true
    userId?: true
  }

  export type OrderMinAggregateInputType = {
    id?: true
    status?: true
    total?: true
    shippingAddress?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrderMaxAggregateInputType = {
    id?: true
    status?: true
    total?: true
    shippingAddress?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
  }

  export type OrderCountAggregateInputType = {
    id?: true
    status?: true
    total?: true
    shippingAddress?: true
    paymentMethod?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    _all?: true
  }

  export type OrderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Order to aggregate.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Orders
    **/
    _count?: true | OrderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderMaxAggregateInputType
  }

  export type GetOrderAggregateType<T extends OrderAggregateArgs> = {
        [P in keyof T & keyof AggregateOrder]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrder[P]>
      : GetScalarType<T[P], AggregateOrder[P]>
  }




  export type OrderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderWhereInput
    orderBy?: OrderOrderByWithAggregationInput | OrderOrderByWithAggregationInput[]
    by: OrderScalarFieldEnum[] | OrderScalarFieldEnum
    having?: OrderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderCountAggregateInputType | true
    _avg?: OrderAvgAggregateInputType
    _sum?: OrderSumAggregateInputType
    _min?: OrderMinAggregateInputType
    _max?: OrderMaxAggregateInputType
  }

  export type OrderGroupByOutputType = {
    id: number
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt: Date
    updatedAt: Date
    userId: number
    _count: OrderCountAggregateOutputType | null
    _avg: OrderAvgAggregateOutputType | null
    _sum: OrderSumAggregateOutputType | null
    _min: OrderMinAggregateOutputType | null
    _max: OrderMaxAggregateOutputType | null
  }

  type GetOrderGroupByPayload<T extends OrderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderGroupByOutputType[P]>
            : GetScalarType<T[P], OrderGroupByOutputType[P]>
        }
      >
    >


  export type OrderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total?: boolean
    shippingAddress?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    OrderProduct?: boolean | Order$OrderProductArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total?: boolean
    shippingAddress?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    status?: boolean
    total?: boolean
    shippingAddress?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["order"]>

  export type OrderSelectScalar = {
    id?: boolean
    status?: boolean
    total?: boolean
    shippingAddress?: boolean
    paymentMethod?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
  }

  export type OrderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "status" | "total" | "shippingAddress" | "paymentMethod" | "createdAt" | "updatedAt" | "userId", ExtArgs["result"]["order"]>
  export type OrderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    OrderProduct?: boolean | Order$OrderProductArgs<ExtArgs>
    _count?: boolean | OrderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type OrderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $OrderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Order"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      OrderProduct: Prisma.$OrderProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      status: string
      total: number
      shippingAddress: string
      paymentMethod: string
      createdAt: Date
      updatedAt: Date
      userId: number
    }, ExtArgs["result"]["order"]>
    composites: {}
  }

  type OrderGetPayload<S extends boolean | null | undefined | OrderDefaultArgs> = $Result.GetResult<Prisma.$OrderPayload, S>

  type OrderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderCountAggregateInputType | true
    }

  export interface OrderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Order'], meta: { name: 'Order' } }
    /**
     * Find zero or one Order that matches the filter.
     * @param {OrderFindUniqueArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderFindUniqueArgs>(args: SelectSubset<T, OrderFindUniqueArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Order that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderFindUniqueOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderFindFirstArgs>(args?: SelectSubset<T, OrderFindFirstArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Order that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindFirstOrThrowArgs} args - Arguments to find a Order
     * @example
     * // Get one Order
     * const order = await prisma.order.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Orders that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Orders
     * const orders = await prisma.order.findMany()
     * 
     * // Get first 10 Orders
     * const orders = await prisma.order.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderWithIdOnly = await prisma.order.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderFindManyArgs>(args?: SelectSubset<T, OrderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Order.
     * @param {OrderCreateArgs} args - Arguments to create a Order.
     * @example
     * // Create one Order
     * const Order = await prisma.order.create({
     *   data: {
     *     // ... data to create a Order
     *   }
     * })
     * 
     */
    create<T extends OrderCreateArgs>(args: SelectSubset<T, OrderCreateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Orders.
     * @param {OrderCreateManyArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderCreateManyArgs>(args?: SelectSubset<T, OrderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Orders and returns the data saved in the database.
     * @param {OrderCreateManyAndReturnArgs} args - Arguments to create many Orders.
     * @example
     * // Create many Orders
     * const order = await prisma.order.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Order.
     * @param {OrderDeleteArgs} args - Arguments to delete one Order.
     * @example
     * // Delete one Order
     * const Order = await prisma.order.delete({
     *   where: {
     *     // ... filter to delete one Order
     *   }
     * })
     * 
     */
    delete<T extends OrderDeleteArgs>(args: SelectSubset<T, OrderDeleteArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Order.
     * @param {OrderUpdateArgs} args - Arguments to update one Order.
     * @example
     * // Update one Order
     * const order = await prisma.order.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderUpdateArgs>(args: SelectSubset<T, OrderUpdateArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Orders.
     * @param {OrderDeleteManyArgs} args - Arguments to filter Orders to delete.
     * @example
     * // Delete a few Orders
     * const { count } = await prisma.order.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderDeleteManyArgs>(args?: SelectSubset<T, OrderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderUpdateManyArgs>(args: SelectSubset<T, OrderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Orders and returns the data updated in the database.
     * @param {OrderUpdateManyAndReturnArgs} args - Arguments to update many Orders.
     * @example
     * // Update many Orders
     * const order = await prisma.order.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Orders and only return the `id`
     * const orderWithIdOnly = await prisma.order.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Order.
     * @param {OrderUpsertArgs} args - Arguments to update or create a Order.
     * @example
     * // Update or create a Order
     * const order = await prisma.order.upsert({
     *   create: {
     *     // ... data to create a Order
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Order we want to update
     *   }
     * })
     */
    upsert<T extends OrderUpsertArgs>(args: SelectSubset<T, OrderUpsertArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Orders.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderCountArgs} args - Arguments to filter Orders to count.
     * @example
     * // Count the number of Orders
     * const count = await prisma.order.count({
     *   where: {
     *     // ... the filter for the Orders we want to count
     *   }
     * })
    **/
    count<T extends OrderCountArgs>(
      args?: Subset<T, OrderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderAggregateArgs>(args: Subset<T, OrderAggregateArgs>): Prisma.PrismaPromise<GetOrderAggregateType<T>>

    /**
     * Group by Order.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderGroupByArgs} args - Group by arguments.
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
      T extends OrderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderGroupByArgs['orderBy'] }
        : { orderBy?: OrderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Order model
   */
  readonly fields: OrderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Order.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    OrderProduct<T extends Order$OrderProductArgs<ExtArgs> = {}>(args?: Subset<T, Order$OrderProductArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Order model
   */
  interface OrderFieldRefs {
    readonly id: FieldRef<"Order", 'Int'>
    readonly status: FieldRef<"Order", 'String'>
    readonly total: FieldRef<"Order", 'Float'>
    readonly shippingAddress: FieldRef<"Order", 'String'>
    readonly paymentMethod: FieldRef<"Order", 'String'>
    readonly createdAt: FieldRef<"Order", 'DateTime'>
    readonly updatedAt: FieldRef<"Order", 'DateTime'>
    readonly userId: FieldRef<"Order", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Order findUnique
   */
  export type OrderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findUniqueOrThrow
   */
  export type OrderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order findFirst
   */
  export type OrderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findFirstOrThrow
   */
  export type OrderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Order to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Orders.
     */
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order findMany
   */
  export type OrderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter, which Orders to fetch.
     */
    where?: OrderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Orders to fetch.
     */
    orderBy?: OrderOrderByWithRelationInput | OrderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Orders.
     */
    cursor?: OrderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Orders from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Orders.
     */
    skip?: number
    distinct?: OrderScalarFieldEnum | OrderScalarFieldEnum[]
  }

  /**
   * Order create
   */
  export type OrderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to create a Order.
     */
    data: XOR<OrderCreateInput, OrderUncheckedCreateInput>
  }

  /**
   * Order createMany
   */
  export type OrderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Order createManyAndReturn
   */
  export type OrderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to create many Orders.
     */
    data: OrderCreateManyInput | OrderCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order update
   */
  export type OrderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The data needed to update a Order.
     */
    data: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
    /**
     * Choose, which Order to update.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order updateMany
   */
  export type OrderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
  }

  /**
   * Order updateManyAndReturn
   */
  export type OrderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * The data used to update Orders.
     */
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyInput>
    /**
     * Filter which Orders to update
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Order upsert
   */
  export type OrderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * The filter to search for the Order to update in case it exists.
     */
    where: OrderWhereUniqueInput
    /**
     * In case the Order found by the `where` argument doesn't exist, create a new Order with this data.
     */
    create: XOR<OrderCreateInput, OrderUncheckedCreateInput>
    /**
     * In case the Order was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderUpdateInput, OrderUncheckedUpdateInput>
  }

  /**
   * Order delete
   */
  export type OrderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
    /**
     * Filter which Order to delete.
     */
    where: OrderWhereUniqueInput
  }

  /**
   * Order deleteMany
   */
  export type OrderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Orders to delete
     */
    where?: OrderWhereInput
    /**
     * Limit how many Orders to delete.
     */
    limit?: number
  }

  /**
   * Order.OrderProduct
   */
  export type Order$OrderProductArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    cursor?: OrderProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * Order without action
   */
  export type OrderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Order
     */
    select?: OrderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Order
     */
    omit?: OrderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderInclude<ExtArgs> | null
  }


  /**
   * Model OrderProduct
   */

  export type AggregateOrderProduct = {
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  export type OrderProductAvgAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderProductSumAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderProductMinAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderProductMaxAggregateOutputType = {
    id: number | null
    quantity: number | null
    unitPrice: number | null
    subtotal: number | null
    orderId: number | null
    productId: number | null
  }

  export type OrderProductCountAggregateOutputType = {
    id: number
    quantity: number
    unitPrice: number
    subtotal: number
    orderId: number
    productId: number
    _all: number
  }


  export type OrderProductAvgAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    orderId?: true
    productId?: true
  }

  export type OrderProductSumAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    orderId?: true
    productId?: true
  }

  export type OrderProductMinAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    orderId?: true
    productId?: true
  }

  export type OrderProductMaxAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    orderId?: true
    productId?: true
  }

  export type OrderProductCountAggregateInputType = {
    id?: true
    quantity?: true
    unitPrice?: true
    subtotal?: true
    orderId?: true
    productId?: true
    _all?: true
  }

  export type OrderProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProduct to aggregate.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned OrderProducts
    **/
    _count?: true | OrderProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrderProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrderProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrderProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrderProductMaxAggregateInputType
  }

  export type GetOrderProductAggregateType<T extends OrderProductAggregateArgs> = {
        [P in keyof T & keyof AggregateOrderProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrderProduct[P]>
      : GetScalarType<T[P], AggregateOrderProduct[P]>
  }




  export type OrderProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrderProductWhereInput
    orderBy?: OrderProductOrderByWithAggregationInput | OrderProductOrderByWithAggregationInput[]
    by: OrderProductScalarFieldEnum[] | OrderProductScalarFieldEnum
    having?: OrderProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrderProductCountAggregateInputType | true
    _avg?: OrderProductAvgAggregateInputType
    _sum?: OrderProductSumAggregateInputType
    _min?: OrderProductMinAggregateInputType
    _max?: OrderProductMaxAggregateInputType
  }

  export type OrderProductGroupByOutputType = {
    id: number
    quantity: number
    unitPrice: number
    subtotal: number
    orderId: number
    productId: number
    _count: OrderProductCountAggregateOutputType | null
    _avg: OrderProductAvgAggregateOutputType | null
    _sum: OrderProductSumAggregateOutputType | null
    _min: OrderProductMinAggregateOutputType | null
    _max: OrderProductMaxAggregateOutputType | null
  }

  type GetOrderProductGroupByPayload<T extends OrderProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrderProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrderProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
            : GetScalarType<T[P], OrderProductGroupByOutputType[P]>
        }
      >
    >


  export type OrderProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    orderId?: boolean
    productId?: boolean
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["orderProduct"]>

  export type OrderProductSelectScalar = {
    id?: boolean
    quantity?: boolean
    unitPrice?: boolean
    subtotal?: boolean
    orderId?: boolean
    productId?: boolean
  }

  export type OrderProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "quantity" | "unitPrice" | "subtotal" | "orderId" | "productId", ExtArgs["result"]["orderProduct"]>
  export type OrderProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type OrderProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    order?: boolean | OrderDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $OrderProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "OrderProduct"
    objects: {
      order: Prisma.$OrderPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      quantity: number
      unitPrice: number
      subtotal: number
      orderId: number
      productId: number
    }, ExtArgs["result"]["orderProduct"]>
    composites: {}
  }

  type OrderProductGetPayload<S extends boolean | null | undefined | OrderProductDefaultArgs> = $Result.GetResult<Prisma.$OrderProductPayload, S>

  type OrderProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrderProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrderProductCountAggregateInputType | true
    }

  export interface OrderProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['OrderProduct'], meta: { name: 'OrderProduct' } }
    /**
     * Find zero or one OrderProduct that matches the filter.
     * @param {OrderProductFindUniqueArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrderProductFindUniqueArgs>(args: SelectSubset<T, OrderProductFindUniqueArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one OrderProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrderProductFindUniqueOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrderProductFindUniqueOrThrowArgs>(args: SelectSubset<T, OrderProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrderProductFindFirstArgs>(args?: SelectSubset<T, OrderProductFindFirstArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first OrderProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindFirstOrThrowArgs} args - Arguments to find a OrderProduct
     * @example
     * // Get one OrderProduct
     * const orderProduct = await prisma.orderProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrderProductFindFirstOrThrowArgs>(args?: SelectSubset<T, OrderProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more OrderProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany()
     * 
     * // Get first 10 OrderProducts
     * const orderProducts = await prisma.orderProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrderProductFindManyArgs>(args?: SelectSubset<T, OrderProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a OrderProduct.
     * @param {OrderProductCreateArgs} args - Arguments to create a OrderProduct.
     * @example
     * // Create one OrderProduct
     * const OrderProduct = await prisma.orderProduct.create({
     *   data: {
     *     // ... data to create a OrderProduct
     *   }
     * })
     * 
     */
    create<T extends OrderProductCreateArgs>(args: SelectSubset<T, OrderProductCreateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many OrderProducts.
     * @param {OrderProductCreateManyArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrderProductCreateManyArgs>(args?: SelectSubset<T, OrderProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many OrderProducts and returns the data saved in the database.
     * @param {OrderProductCreateManyAndReturnArgs} args - Arguments to create many OrderProducts.
     * @example
     * // Create many OrderProducts
     * const orderProduct = await prisma.orderProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrderProductCreateManyAndReturnArgs>(args?: SelectSubset<T, OrderProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a OrderProduct.
     * @param {OrderProductDeleteArgs} args - Arguments to delete one OrderProduct.
     * @example
     * // Delete one OrderProduct
     * const OrderProduct = await prisma.orderProduct.delete({
     *   where: {
     *     // ... filter to delete one OrderProduct
     *   }
     * })
     * 
     */
    delete<T extends OrderProductDeleteArgs>(args: SelectSubset<T, OrderProductDeleteArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one OrderProduct.
     * @param {OrderProductUpdateArgs} args - Arguments to update one OrderProduct.
     * @example
     * // Update one OrderProduct
     * const orderProduct = await prisma.orderProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrderProductUpdateArgs>(args: SelectSubset<T, OrderProductUpdateArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more OrderProducts.
     * @param {OrderProductDeleteManyArgs} args - Arguments to filter OrderProducts to delete.
     * @example
     * // Delete a few OrderProducts
     * const { count } = await prisma.orderProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrderProductDeleteManyArgs>(args?: SelectSubset<T, OrderProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrderProductUpdateManyArgs>(args: SelectSubset<T, OrderProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more OrderProducts and returns the data updated in the database.
     * @param {OrderProductUpdateManyAndReturnArgs} args - Arguments to update many OrderProducts.
     * @example
     * // Update many OrderProducts
     * const orderProduct = await prisma.orderProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more OrderProducts and only return the `id`
     * const orderProductWithIdOnly = await prisma.orderProduct.updateManyAndReturn({
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
    updateManyAndReturn<T extends OrderProductUpdateManyAndReturnArgs>(args: SelectSubset<T, OrderProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one OrderProduct.
     * @param {OrderProductUpsertArgs} args - Arguments to update or create a OrderProduct.
     * @example
     * // Update or create a OrderProduct
     * const orderProduct = await prisma.orderProduct.upsert({
     *   create: {
     *     // ... data to create a OrderProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the OrderProduct we want to update
     *   }
     * })
     */
    upsert<T extends OrderProductUpsertArgs>(args: SelectSubset<T, OrderProductUpsertArgs<ExtArgs>>): Prisma__OrderProductClient<$Result.GetResult<Prisma.$OrderProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of OrderProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductCountArgs} args - Arguments to filter OrderProducts to count.
     * @example
     * // Count the number of OrderProducts
     * const count = await prisma.orderProduct.count({
     *   where: {
     *     // ... the filter for the OrderProducts we want to count
     *   }
     * })
    **/
    count<T extends OrderProductCountArgs>(
      args?: Subset<T, OrderProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrderProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends OrderProductAggregateArgs>(args: Subset<T, OrderProductAggregateArgs>): Prisma.PrismaPromise<GetOrderProductAggregateType<T>>

    /**
     * Group by OrderProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrderProductGroupByArgs} args - Group by arguments.
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
      T extends OrderProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrderProductGroupByArgs['orderBy'] }
        : { orderBy?: OrderProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, OrderProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrderProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the OrderProduct model
   */
  readonly fields: OrderProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for OrderProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrderProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    order<T extends OrderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrderDefaultArgs<ExtArgs>>): Prisma__OrderClient<$Result.GetResult<Prisma.$OrderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the OrderProduct model
   */
  interface OrderProductFieldRefs {
    readonly id: FieldRef<"OrderProduct", 'Int'>
    readonly quantity: FieldRef<"OrderProduct", 'Int'>
    readonly unitPrice: FieldRef<"OrderProduct", 'Float'>
    readonly subtotal: FieldRef<"OrderProduct", 'Float'>
    readonly orderId: FieldRef<"OrderProduct", 'Int'>
    readonly productId: FieldRef<"OrderProduct", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * OrderProduct findUnique
   */
  export type OrderProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findUniqueOrThrow
   */
  export type OrderProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct findFirst
   */
  export type OrderProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findFirstOrThrow
   */
  export type OrderProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProduct to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of OrderProducts.
     */
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct findMany
   */
  export type OrderProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter, which OrderProducts to fetch.
     */
    where?: OrderProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of OrderProducts to fetch.
     */
    orderBy?: OrderProductOrderByWithRelationInput | OrderProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing OrderProducts.
     */
    cursor?: OrderProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` OrderProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` OrderProducts.
     */
    skip?: number
    distinct?: OrderProductScalarFieldEnum | OrderProductScalarFieldEnum[]
  }

  /**
   * OrderProduct create
   */
  export type OrderProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to create a OrderProduct.
     */
    data: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
  }

  /**
   * OrderProduct createMany
   */
  export type OrderProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * OrderProduct createManyAndReturn
   */
  export type OrderProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to create many OrderProducts.
     */
    data: OrderProductCreateManyInput | OrderProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct update
   */
  export type OrderProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The data needed to update a OrderProduct.
     */
    data: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
    /**
     * Choose, which OrderProduct to update.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct updateMany
   */
  export type OrderProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
  }

  /**
   * OrderProduct updateManyAndReturn
   */
  export type OrderProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * The data used to update OrderProducts.
     */
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyInput>
    /**
     * Filter which OrderProducts to update
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * OrderProduct upsert
   */
  export type OrderProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * The filter to search for the OrderProduct to update in case it exists.
     */
    where: OrderProductWhereUniqueInput
    /**
     * In case the OrderProduct found by the `where` argument doesn't exist, create a new OrderProduct with this data.
     */
    create: XOR<OrderProductCreateInput, OrderProductUncheckedCreateInput>
    /**
     * In case the OrderProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrderProductUpdateInput, OrderProductUncheckedUpdateInput>
  }

  /**
   * OrderProduct delete
   */
  export type OrderProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
    /**
     * Filter which OrderProduct to delete.
     */
    where: OrderProductWhereUniqueInput
  }

  /**
   * OrderProduct deleteMany
   */
  export type OrderProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which OrderProducts to delete
     */
    where?: OrderProductWhereInput
    /**
     * Limit how many OrderProducts to delete.
     */
    limit?: number
  }

  /**
   * OrderProduct without action
   */
  export type OrderProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrderProduct
     */
    select?: OrderProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the OrderProduct
     */
    omit?: OrderProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrderProductInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    sex: 'sex',
    birthDate: 'birthDate',
    province: 'province',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const BusinessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    description: 'description',
    businessType: 'businessType',
    phoneNumber: 'phoneNumber',
    address: 'address',
    city: 'city',
    province: 'province',
    postalCode: 'postalCode',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type BusinessScalarFieldEnum = (typeof BusinessScalarFieldEnum)[keyof typeof BusinessScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    image: 'image',
    enabled: 'enabled',
    price: 'price',
    discounted: 'discounted',
    discount: 'discount',
    deleted: 'deleted',
    createdAt: 'createdAt',
    businessId: 'businessId'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const UserProductScalarFieldEnum: {
    id: 'id',
    title: 'title',
    review: 'review',
    rating: 'rating',
    createdAt: 'createdAt',
    userId: 'userId',
    productId: 'productId'
  };

  export type UserProductScalarFieldEnum = (typeof UserProductScalarFieldEnum)[keyof typeof UserProductScalarFieldEnum]


  export const OrderScalarFieldEnum: {
    id: 'id',
    status: 'status',
    total: 'total',
    shippingAddress: 'shippingAddress',
    paymentMethod: 'paymentMethod',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId'
  };

  export type OrderScalarFieldEnum = (typeof OrderScalarFieldEnum)[keyof typeof OrderScalarFieldEnum]


  export const OrderProductScalarFieldEnum: {
    id: 'id',
    quantity: 'quantity',
    unitPrice: 'unitPrice',
    subtotal: 'subtotal',
    orderId: 'orderId',
    productId: 'productId'
  };

  export type OrderProductScalarFieldEnum = (typeof OrderProductScalarFieldEnum)[keyof typeof OrderProductScalarFieldEnum]


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
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: IntFilter<"User"> | number
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    sex?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    province?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UserProduct?: UserProductListRelationFilter
    Order?: OrderListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    province?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    UserProduct?: UserProductOrderByRelationAggregateInput
    Order?: OrderOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    sex?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    province?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    UserProduct?: UserProductListRelationFilter
    Order?: OrderListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    province?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"User"> | number
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    sex?: StringWithAggregatesFilter<"User"> | string
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    province?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type BusinessWhereInput = {
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    id?: IntFilter<"Business"> | number
    name?: StringFilter<"Business"> | string
    email?: StringFilter<"Business"> | string
    description?: StringNullableFilter<"Business"> | string | null
    businessType?: StringFilter<"Business"> | string
    phoneNumber?: StringFilter<"Business"> | string
    address?: StringFilter<"Business"> | string
    city?: StringFilter<"Business"> | string
    province?: StringFilter<"Business"> | string
    postalCode?: StringFilter<"Business"> | string
    password?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    product?: ProductListRelationFilter
  }

  export type BusinessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    businessType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByRelationAggregateInput
  }

  export type BusinessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    AND?: BusinessWhereInput | BusinessWhereInput[]
    OR?: BusinessWhereInput[]
    NOT?: BusinessWhereInput | BusinessWhereInput[]
    name?: StringFilter<"Business"> | string
    description?: StringNullableFilter<"Business"> | string | null
    businessType?: StringFilter<"Business"> | string
    phoneNumber?: StringFilter<"Business"> | string
    address?: StringFilter<"Business"> | string
    city?: StringFilter<"Business"> | string
    province?: StringFilter<"Business"> | string
    postalCode?: StringFilter<"Business"> | string
    password?: StringFilter<"Business"> | string
    createdAt?: DateTimeFilter<"Business"> | Date | string
    product?: ProductListRelationFilter
  }, "id" | "email">

  export type BusinessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrderInput | SortOrder
    businessType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: BusinessCountOrderByAggregateInput
    _avg?: BusinessAvgOrderByAggregateInput
    _max?: BusinessMaxOrderByAggregateInput
    _min?: BusinessMinOrderByAggregateInput
    _sum?: BusinessSumOrderByAggregateInput
  }

  export type BusinessScalarWhereWithAggregatesInput = {
    AND?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    OR?: BusinessScalarWhereWithAggregatesInput[]
    NOT?: BusinessScalarWhereWithAggregatesInput | BusinessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Business"> | number
    name?: StringWithAggregatesFilter<"Business"> | string
    email?: StringWithAggregatesFilter<"Business"> | string
    description?: StringNullableWithAggregatesFilter<"Business"> | string | null
    businessType?: StringWithAggregatesFilter<"Business"> | string
    phoneNumber?: StringWithAggregatesFilter<"Business"> | string
    address?: StringWithAggregatesFilter<"Business"> | string
    city?: StringWithAggregatesFilter<"Business"> | string
    province?: StringWithAggregatesFilter<"Business"> | string
    postalCode?: StringWithAggregatesFilter<"Business"> | string
    password?: StringWithAggregatesFilter<"Business"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Business"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    enabled?: BoolNullableFilter<"Product"> | boolean | null
    price?: FloatNullableFilter<"Product"> | number | null
    discounted?: BoolNullableFilter<"Product"> | boolean | null
    discount?: FloatNullableFilter<"Product"> | number | null
    deleted?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    businessId?: IntFilter<"Product"> | number
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    categories?: CategoryListRelationFilter
    UserProduct?: UserProductListRelationFilter
    OrderProduct?: OrderProductListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    enabled?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    discounted?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
    business?: BusinessOrderByWithRelationInput
    categories?: CategoryOrderByRelationAggregateInput
    UserProduct?: UserProductOrderByRelationAggregateInput
    OrderProduct?: OrderProductOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    enabled?: BoolNullableFilter<"Product"> | boolean | null
    price?: FloatNullableFilter<"Product"> | number | null
    discounted?: BoolNullableFilter<"Product"> | boolean | null
    discount?: FloatNullableFilter<"Product"> | number | null
    deleted?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    businessId?: IntFilter<"Product"> | number
    business?: XOR<BusinessScalarRelationFilter, BusinessWhereInput>
    categories?: CategoryListRelationFilter
    UserProduct?: UserProductListRelationFilter
    OrderProduct?: OrderProductListRelationFilter
  }, "id">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    enabled?: SortOrderInput | SortOrder
    price?: SortOrderInput | SortOrder
    discounted?: SortOrderInput | SortOrder
    discount?: SortOrderInput | SortOrder
    deleted?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    name?: StringWithAggregatesFilter<"Product"> | string
    description?: StringWithAggregatesFilter<"Product"> | string
    image?: StringWithAggregatesFilter<"Product"> | string
    enabled?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    price?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    discounted?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    discount?: FloatNullableWithAggregatesFilter<"Product"> | number | null
    deleted?: BoolNullableWithAggregatesFilter<"Product"> | boolean | null
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    businessId?: IntWithAggregatesFilter<"Product"> | number
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
    products?: ProductListRelationFilter
  }, "id">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Category"> | number
    name?: StringWithAggregatesFilter<"Category"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type UserProductWhereInput = {
    AND?: UserProductWhereInput | UserProductWhereInput[]
    OR?: UserProductWhereInput[]
    NOT?: UserProductWhereInput | UserProductWhereInput[]
    id?: IntFilter<"UserProduct"> | number
    title?: StringFilter<"UserProduct"> | string
    review?: StringFilter<"UserProduct"> | string
    rating?: FloatFilter<"UserProduct"> | number
    createdAt?: DateTimeFilter<"UserProduct"> | Date | string
    userId?: IntFilter<"UserProduct"> | number
    productId?: IntFilter<"UserProduct"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type UserProductOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type UserProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: UserProductWhereInput | UserProductWhereInput[]
    OR?: UserProductWhereInput[]
    NOT?: UserProductWhereInput | UserProductWhereInput[]
    title?: StringFilter<"UserProduct"> | string
    review?: StringFilter<"UserProduct"> | string
    rating?: FloatFilter<"UserProduct"> | number
    createdAt?: DateTimeFilter<"UserProduct"> | Date | string
    userId?: IntFilter<"UserProduct"> | number
    productId?: IntFilter<"UserProduct"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type UserProductOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
    _count?: UserProductCountOrderByAggregateInput
    _avg?: UserProductAvgOrderByAggregateInput
    _max?: UserProductMaxOrderByAggregateInput
    _min?: UserProductMinOrderByAggregateInput
    _sum?: UserProductSumOrderByAggregateInput
  }

  export type UserProductScalarWhereWithAggregatesInput = {
    AND?: UserProductScalarWhereWithAggregatesInput | UserProductScalarWhereWithAggregatesInput[]
    OR?: UserProductScalarWhereWithAggregatesInput[]
    NOT?: UserProductScalarWhereWithAggregatesInput | UserProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"UserProduct"> | number
    title?: StringWithAggregatesFilter<"UserProduct"> | string
    review?: StringWithAggregatesFilter<"UserProduct"> | string
    rating?: FloatWithAggregatesFilter<"UserProduct"> | number
    createdAt?: DateTimeWithAggregatesFilter<"UserProduct"> | Date | string
    userId?: IntWithAggregatesFilter<"UserProduct"> | number
    productId?: IntWithAggregatesFilter<"UserProduct"> | number
  }

  export type OrderWhereInput = {
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    id?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    shippingAddress?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: IntFilter<"Order"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    OrderProduct?: OrderProductListRelationFilter
  }

  export type OrderOrderByWithRelationInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingAddress?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    OrderProduct?: OrderProductOrderByRelationAggregateInput
  }

  export type OrderWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderWhereInput | OrderWhereInput[]
    OR?: OrderWhereInput[]
    NOT?: OrderWhereInput | OrderWhereInput[]
    status?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    shippingAddress?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: IntFilter<"Order"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    OrderProduct?: OrderProductListRelationFilter
  }, "id">

  export type OrderOrderByWithAggregationInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingAddress?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    _count?: OrderCountOrderByAggregateInput
    _avg?: OrderAvgOrderByAggregateInput
    _max?: OrderMaxOrderByAggregateInput
    _min?: OrderMinOrderByAggregateInput
    _sum?: OrderSumOrderByAggregateInput
  }

  export type OrderScalarWhereWithAggregatesInput = {
    AND?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    OR?: OrderScalarWhereWithAggregatesInput[]
    NOT?: OrderScalarWhereWithAggregatesInput | OrderScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Order"> | number
    status?: StringWithAggregatesFilter<"Order"> | string
    total?: FloatWithAggregatesFilter<"Order"> | number
    shippingAddress?: StringWithAggregatesFilter<"Order"> | string
    paymentMethod?: StringWithAggregatesFilter<"Order"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Order"> | Date | string
    userId?: IntWithAggregatesFilter<"Order"> | number
  }

  export type OrderProductWhereInput = {
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    id?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    unitPrice?: FloatFilter<"OrderProduct"> | number
    subtotal?: FloatFilter<"OrderProduct"> | number
    orderId?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type OrderProductOrderByWithRelationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    order?: OrderOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type OrderProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: OrderProductWhereInput | OrderProductWhereInput[]
    OR?: OrderProductWhereInput[]
    NOT?: OrderProductWhereInput | OrderProductWhereInput[]
    quantity?: IntFilter<"OrderProduct"> | number
    unitPrice?: FloatFilter<"OrderProduct"> | number
    subtotal?: FloatFilter<"OrderProduct"> | number
    orderId?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
    order?: XOR<OrderScalarRelationFilter, OrderWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type OrderProductOrderByWithAggregationInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
    _count?: OrderProductCountOrderByAggregateInput
    _avg?: OrderProductAvgOrderByAggregateInput
    _max?: OrderProductMaxOrderByAggregateInput
    _min?: OrderProductMinOrderByAggregateInput
    _sum?: OrderProductSumOrderByAggregateInput
  }

  export type OrderProductScalarWhereWithAggregatesInput = {
    AND?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    OR?: OrderProductScalarWhereWithAggregatesInput[]
    NOT?: OrderProductScalarWhereWithAggregatesInput | OrderProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"OrderProduct"> | number
    quantity?: IntWithAggregatesFilter<"OrderProduct"> | number
    unitPrice?: FloatWithAggregatesFilter<"OrderProduct"> | number
    subtotal?: FloatWithAggregatesFilter<"OrderProduct"> | number
    orderId?: IntWithAggregatesFilter<"OrderProduct"> | number
    productId?: IntWithAggregatesFilter<"OrderProduct"> | number
  }

  export type UserCreateInput = {
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
    UserProduct?: UserProductCreateNestedManyWithoutUserInput
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
    UserProduct?: UserProductUncheckedCreateNestedManyWithoutUserInput
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserProduct?: UserProductUpdateManyWithoutUserNestedInput
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserProduct?: UserProductUncheckedUpdateManyWithoutUserNestedInput
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessCreateInput = {
    name: string
    email: string
    description?: string | null
    businessType: string
    phoneNumber: string
    address: string
    city: string
    province: string
    postalCode: string
    password: string
    createdAt?: Date | string
    product?: ProductCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUncheckedCreateInput = {
    id?: number
    name: string
    email: string
    description?: string | null
    businessType: string
    phoneNumber: string
    address: string
    city: string
    province: string
    postalCode: string
    password: string
    createdAt?: Date | string
    product?: ProductUncheckedCreateNestedManyWithoutBusinessInput
  }

  export type BusinessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUncheckedUpdateManyWithoutBusinessNestedInput
  }

  export type BusinessCreateManyInput = {
    id?: number
    name: string
    email: string
    description?: string | null
    businessType: string
    phoneNumber: string
    address: string
    city: string
    province: string
    postalCode: string
    password: string
    createdAt?: Date | string
  }

  export type BusinessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductInput
    categories?: CategoryCreateNestedManyWithoutProductsInput
    UserProduct?: UserProductCreateNestedManyWithoutProductInput
    OrderProduct?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    businessId: number
    categories?: CategoryUncheckedCreateNestedManyWithoutProductsInput
    UserProduct?: UserProductUncheckedCreateNestedManyWithoutProductInput
    OrderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductNestedInput
    categories?: CategoryUpdateManyWithoutProductsNestedInput
    UserProduct?: UserProductUpdateManyWithoutProductNestedInput
    OrderProduct?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutProductsNestedInput
    UserProduct?: UserProductUncheckedUpdateManyWithoutProductNestedInput
    OrderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    businessId: number
  }

  export type ProductUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: IntFieldUpdateOperationsInput | number
  }

  export type CategoryCreateInput = {
    name: string
    createdAt?: Date | string
    products?: ProductCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    name: string
    createdAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutCategoriesInput
  }

  export type CategoryUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutCategoriesNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductCreateInput = {
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserProductInput
    product: ProductCreateNestedOneWithoutUserProductInput
  }

  export type UserProductUncheckedCreateInput = {
    id?: number
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    userId: number
    productId: number
  }

  export type UserProductUpdateInput = {
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProductNestedInput
    product?: ProductUpdateOneRequiredWithoutUserProductNestedInput
  }

  export type UserProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProductCreateManyInput = {
    id?: number
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    userId: number
    productId: number
  }

  export type UserProductUpdateManyMutationInput = {
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderCreateInput = {
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
    OrderProduct?: OrderProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateInput = {
    id?: number
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
    OrderProduct?: OrderProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderUpdateInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
    OrderProduct?: OrderProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
    OrderProduct?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderCreateManyInput = {
    id?: number
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type OrderUpdateManyMutationInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrderUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductCreateInput = {
    quantity: number
    unitPrice: number
    subtotal: number
    order: OrderCreateNestedOneWithoutOrderProductInput
    product: ProductCreateNestedOneWithoutOrderProductInput
  }

  export type OrderProductUncheckedCreateInput = {
    id?: number
    quantity: number
    unitPrice: number
    subtotal: number
    orderId: number
    productId: number
  }

  export type OrderProductUpdateInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderProductNestedInput
    product?: ProductUpdateOneRequiredWithoutOrderProductNestedInput
  }

  export type OrderProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductCreateManyInput = {
    id?: number
    quantity: number
    unitPrice: number
    subtotal: number
    orderId: number
    productId: number
  }

  export type OrderProductUpdateManyMutationInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
  }

  export type OrderProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
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

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserProductListRelationFilter = {
    every?: UserProductWhereInput
    some?: UserProductWhereInput
    none?: UserProductWhereInput
  }

  export type OrderListRelationFilter = {
    every?: OrderWhereInput
    some?: OrderWhereInput
    none?: OrderWhereInput
  }

  export type UserProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    province?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    province?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    sex?: SortOrder
    birthDate?: SortOrder
    province?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type BusinessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    businessType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BusinessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    businessType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    description?: SortOrder
    businessType?: SortOrder
    phoneNumber?: SortOrder
    address?: SortOrder
    city?: SortOrder
    province?: SortOrder
    postalCode?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type BusinessSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type BoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type BusinessScalarRelationFilter = {
    is?: BusinessWhereInput
    isNot?: BusinessWhereInput
  }

  export type CategoryListRelationFilter = {
    every?: CategoryWhereInput
    some?: CategoryWhereInput
    none?: CategoryWhereInput
  }

  export type OrderProductListRelationFilter = {
    every?: OrderProductWhereInput
    some?: OrderProductWhereInput
    none?: OrderProductWhereInput
  }

  export type CategoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrderProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    enabled?: SortOrder
    price?: SortOrder
    discounted?: SortOrder
    discount?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    businessId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    enabled?: SortOrder
    price?: SortOrder
    discounted?: SortOrder
    discount?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    image?: SortOrder
    enabled?: SortOrder
    price?: SortOrder
    discounted?: SortOrder
    discount?: SortOrder
    deleted?: SortOrder
    createdAt?: SortOrder
    businessId?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    discount?: SortOrder
    businessId?: SortOrder
  }

  export type BoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type UserProductCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserProductAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserProductMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserProductMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    review?: SortOrder
    rating?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type UserProductSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    userId?: SortOrder
    productId?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OrderCountOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingAddress?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderAvgOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type OrderMaxOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingAddress?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderMinOrderByAggregateInput = {
    id?: SortOrder
    status?: SortOrder
    total?: SortOrder
    shippingAddress?: SortOrder
    paymentMethod?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
  }

  export type OrderSumOrderByAggregateInput = {
    id?: SortOrder
    total?: SortOrder
    userId?: SortOrder
  }

  export type OrderScalarRelationFilter = {
    is?: OrderWhereInput
    isNot?: OrderWhereInput
  }

  export type OrderProductCountOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductAvgOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductMaxOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductMinOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type OrderProductSumOrderByAggregateInput = {
    id?: SortOrder
    quantity?: SortOrder
    unitPrice?: SortOrder
    subtotal?: SortOrder
    orderId?: SortOrder
    productId?: SortOrder
  }

  export type UserProductCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type OrderCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type UserProductUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type OrderUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserProductUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutUserInput | UserProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutUserInput | UserProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutUserInput | UserProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type OrderUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserProductUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput> | UserProductCreateWithoutUserInput[] | UserProductUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutUserInput | UserProductCreateOrConnectWithoutUserInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutUserInput | UserProductUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserProductCreateManyUserInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutUserInput | UserProductUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutUserInput | UserProductUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type OrderUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput> | OrderCreateWithoutUserInput[] | OrderUncheckedCreateWithoutUserInput[]
    connectOrCreate?: OrderCreateOrConnectWithoutUserInput | OrderCreateOrConnectWithoutUserInput[]
    upsert?: OrderUpsertWithWhereUniqueWithoutUserInput | OrderUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: OrderCreateManyUserInputEnvelope
    set?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    disconnect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    delete?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    connect?: OrderWhereUniqueInput | OrderWhereUniqueInput[]
    update?: OrderUpdateWithWhereUniqueWithoutUserInput | OrderUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: OrderUpdateManyWithWhereWithoutUserInput | OrderUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: OrderScalarWhereInput | OrderScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutBusinessInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ProductUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBusinessInput | ProductUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBusinessInput | ProductUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBusinessInput | ProductUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutBusinessNestedInput = {
    create?: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput> | ProductCreateWithoutBusinessInput[] | ProductUncheckedCreateWithoutBusinessInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutBusinessInput | ProductCreateOrConnectWithoutBusinessInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutBusinessInput | ProductUpsertWithWhereUniqueWithoutBusinessInput[]
    createMany?: ProductCreateManyBusinessInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutBusinessInput | ProductUpdateWithWhereUniqueWithoutBusinessInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutBusinessInput | ProductUpdateManyWithWhereWithoutBusinessInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type BusinessCreateNestedOneWithoutProductInput = {
    create?: XOR<BusinessCreateWithoutProductInput, BusinessUncheckedCreateWithoutProductInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutProductInput
    connect?: BusinessWhereUniqueInput
  }

  export type CategoryCreateNestedManyWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput> | CategoryCreateWithoutProductsInput[] | CategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | CategoryCreateOrConnectWithoutProductsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserProductCreateNestedManyWithoutProductInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type OrderProductCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type CategoryUncheckedCreateNestedManyWithoutProductsInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput> | CategoryCreateWithoutProductsInput[] | CategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | CategoryCreateOrConnectWithoutProductsInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
  }

  export type UserProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
  }

  export type OrderProductUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type NullableBoolFieldUpdateOperationsInput = {
    set?: boolean | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BusinessUpdateOneRequiredWithoutProductNestedInput = {
    create?: XOR<BusinessCreateWithoutProductInput, BusinessUncheckedCreateWithoutProductInput>
    connectOrCreate?: BusinessCreateOrConnectWithoutProductInput
    upsert?: BusinessUpsertWithoutProductInput
    connect?: BusinessWhereUniqueInput
    update?: XOR<XOR<BusinessUpdateToOneWithWhereWithoutProductInput, BusinessUpdateWithoutProductInput>, BusinessUncheckedUpdateWithoutProductInput>
  }

  export type CategoryUpdateManyWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput> | CategoryCreateWithoutProductsInput[] | CategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | CategoryCreateOrConnectWithoutProductsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProductsInput | CategoryUpsertWithWhereUniqueWithoutProductsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProductsInput | CategoryUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProductsInput | CategoryUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutProductInput | UserProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutProductInput | UserProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutProductInput | UserProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type OrderProductUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type CategoryUncheckedUpdateManyWithoutProductsNestedInput = {
    create?: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput> | CategoryCreateWithoutProductsInput[] | CategoryUncheckedCreateWithoutProductsInput[]
    connectOrCreate?: CategoryCreateOrConnectWithoutProductsInput | CategoryCreateOrConnectWithoutProductsInput[]
    upsert?: CategoryUpsertWithWhereUniqueWithoutProductsInput | CategoryUpsertWithWhereUniqueWithoutProductsInput[]
    set?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    disconnect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    delete?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    connect?: CategoryWhereUniqueInput | CategoryWhereUniqueInput[]
    update?: CategoryUpdateWithWhereUniqueWithoutProductsInput | CategoryUpdateWithWhereUniqueWithoutProductsInput[]
    updateMany?: CategoryUpdateManyWithWhereWithoutProductsInput | CategoryUpdateManyWithWhereWithoutProductsInput[]
    deleteMany?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
  }

  export type UserProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput> | UserProductCreateWithoutProductInput[] | UserProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: UserProductCreateOrConnectWithoutProductInput | UserProductCreateOrConnectWithoutProductInput[]
    upsert?: UserProductUpsertWithWhereUniqueWithoutProductInput | UserProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: UserProductCreateManyProductInputEnvelope
    set?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    disconnect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    delete?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    connect?: UserProductWhereUniqueInput | UserProductWhereUniqueInput[]
    update?: UserProductUpdateWithWhereUniqueWithoutProductInput | UserProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: UserProductUpdateManyWithWhereWithoutProductInput | UserProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
  }

  export type OrderProductUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput> | OrderProductCreateWithoutProductInput[] | OrderProductUncheckedCreateWithoutProductInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutProductInput | OrderProductCreateOrConnectWithoutProductInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutProductInput | OrderProductUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: OrderProductCreateManyProductInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutProductInput | OrderProductUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutProductInput | OrderProductUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type ProductCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput> | ProductCreateWithoutCategoriesInput[] | ProductUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput | ProductCreateOrConnectWithoutCategoriesInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutCategoriesInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput> | ProductCreateWithoutCategoriesInput[] | ProductUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput | ProductCreateOrConnectWithoutCategoriesInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput> | ProductCreateWithoutCategoriesInput[] | ProductUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput | ProductCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoriesInput | ProductUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoriesInput | ProductUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoriesInput | ProductUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ProductUncheckedUpdateManyWithoutCategoriesNestedInput = {
    create?: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput> | ProductCreateWithoutCategoriesInput[] | ProductUncheckedCreateWithoutCategoriesInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutCategoriesInput | ProductCreateOrConnectWithoutCategoriesInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutCategoriesInput | ProductUpsertWithWhereUniqueWithoutCategoriesInput[]
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutCategoriesInput | ProductUpdateWithWhereUniqueWithoutCategoriesInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutCategoriesInput | ProductUpdateManyWithWhereWithoutCategoriesInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserProductInput = {
    create?: XOR<UserCreateWithoutUserProductInput, UserUncheckedCreateWithoutUserProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProductInput
    connect?: UserWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutUserProductInput = {
    create?: XOR<ProductCreateWithoutUserProductInput, ProductUncheckedCreateWithoutUserProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserProductInput
    connect?: ProductWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutUserProductNestedInput = {
    create?: XOR<UserCreateWithoutUserProductInput, UserUncheckedCreateWithoutUserProductInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserProductInput
    upsert?: UserUpsertWithoutUserProductInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserProductInput, UserUpdateWithoutUserProductInput>, UserUncheckedUpdateWithoutUserProductInput>
  }

  export type ProductUpdateOneRequiredWithoutUserProductNestedInput = {
    create?: XOR<ProductCreateWithoutUserProductInput, ProductUncheckedCreateWithoutUserProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutUserProductInput
    upsert?: ProductUpsertWithoutUserProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutUserProductInput, ProductUpdateWithoutUserProductInput>, ProductUncheckedUpdateWithoutUserProductInput>
  }

  export type UserCreateNestedOneWithoutOrderInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    connect?: UserWhereUniqueInput
  }

  export type OrderProductCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type OrderProductUncheckedCreateNestedManyWithoutOrderInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutOrderNestedInput = {
    create?: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    connectOrCreate?: UserCreateOrConnectWithoutOrderInput
    upsert?: UserUpsertWithoutOrderInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutOrderInput, UserUpdateWithoutOrderInput>, UserUncheckedUpdateWithoutOrderInput>
  }

  export type OrderProductUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutOrderInput | OrderProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutOrderInput | OrderProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutOrderInput | OrderProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type OrderProductUncheckedUpdateManyWithoutOrderNestedInput = {
    create?: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput> | OrderProductCreateWithoutOrderInput[] | OrderProductUncheckedCreateWithoutOrderInput[]
    connectOrCreate?: OrderProductCreateOrConnectWithoutOrderInput | OrderProductCreateOrConnectWithoutOrderInput[]
    upsert?: OrderProductUpsertWithWhereUniqueWithoutOrderInput | OrderProductUpsertWithWhereUniqueWithoutOrderInput[]
    createMany?: OrderProductCreateManyOrderInputEnvelope
    set?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    disconnect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    delete?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    connect?: OrderProductWhereUniqueInput | OrderProductWhereUniqueInput[]
    update?: OrderProductUpdateWithWhereUniqueWithoutOrderInput | OrderProductUpdateWithWhereUniqueWithoutOrderInput[]
    updateMany?: OrderProductUpdateManyWithWhereWithoutOrderInput | OrderProductUpdateManyWithWhereWithoutOrderInput[]
    deleteMany?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
  }

  export type OrderCreateNestedOneWithoutOrderProductInput = {
    create?: XOR<OrderCreateWithoutOrderProductInput, OrderUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductInput
    connect?: OrderWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutOrderProductInput = {
    create?: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductInput
    connect?: ProductWhereUniqueInput
  }

  export type OrderUpdateOneRequiredWithoutOrderProductNestedInput = {
    create?: XOR<OrderCreateWithoutOrderProductInput, OrderUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: OrderCreateOrConnectWithoutOrderProductInput
    upsert?: OrderUpsertWithoutOrderProductInput
    connect?: OrderWhereUniqueInput
    update?: XOR<XOR<OrderUpdateToOneWithWhereWithoutOrderProductInput, OrderUpdateWithoutOrderProductInput>, OrderUncheckedUpdateWithoutOrderProductInput>
  }

  export type ProductUpdateOneRequiredWithoutOrderProductNestedInput = {
    create?: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
    connectOrCreate?: ProductCreateOrConnectWithoutOrderProductInput
    upsert?: ProductUpsertWithoutOrderProductInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutOrderProductInput, ProductUpdateWithoutOrderProductInput>, ProductUncheckedUpdateWithoutOrderProductInput>
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

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
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

  export type NestedBoolNullableFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableFilter<$PrismaModel> | boolean | null
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

  export type NestedBoolNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel> | null
    not?: NestedBoolNullableWithAggregatesFilter<$PrismaModel> | boolean | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedBoolNullableFilter<$PrismaModel>
    _max?: NestedBoolNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserProductCreateWithoutUserInput = {
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutUserProductInput
  }

  export type UserProductUncheckedCreateWithoutUserInput = {
    id?: number
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    productId: number
  }

  export type UserProductCreateOrConnectWithoutUserInput = {
    where: UserProductWhereUniqueInput
    create: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput>
  }

  export type UserProductCreateManyUserInputEnvelope = {
    data: UserProductCreateManyUserInput | UserProductCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type OrderCreateWithoutUserInput = {
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderProduct?: OrderProductCreateNestedManyWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutUserInput = {
    id?: number
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    OrderProduct?: OrderProductUncheckedCreateNestedManyWithoutOrderInput
  }

  export type OrderCreateOrConnectWithoutUserInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderCreateManyUserInputEnvelope = {
    data: OrderCreateManyUserInput | OrderCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserProductUpsertWithWhereUniqueWithoutUserInput = {
    where: UserProductWhereUniqueInput
    update: XOR<UserProductUpdateWithoutUserInput, UserProductUncheckedUpdateWithoutUserInput>
    create: XOR<UserProductCreateWithoutUserInput, UserProductUncheckedCreateWithoutUserInput>
  }

  export type UserProductUpdateWithWhereUniqueWithoutUserInput = {
    where: UserProductWhereUniqueInput
    data: XOR<UserProductUpdateWithoutUserInput, UserProductUncheckedUpdateWithoutUserInput>
  }

  export type UserProductUpdateManyWithWhereWithoutUserInput = {
    where: UserProductScalarWhereInput
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyWithoutUserInput>
  }

  export type UserProductScalarWhereInput = {
    AND?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
    OR?: UserProductScalarWhereInput[]
    NOT?: UserProductScalarWhereInput | UserProductScalarWhereInput[]
    id?: IntFilter<"UserProduct"> | number
    title?: StringFilter<"UserProduct"> | string
    review?: StringFilter<"UserProduct"> | string
    rating?: FloatFilter<"UserProduct"> | number
    createdAt?: DateTimeFilter<"UserProduct"> | Date | string
    userId?: IntFilter<"UserProduct"> | number
    productId?: IntFilter<"UserProduct"> | number
  }

  export type OrderUpsertWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    update: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
    create: XOR<OrderCreateWithoutUserInput, OrderUncheckedCreateWithoutUserInput>
  }

  export type OrderUpdateWithWhereUniqueWithoutUserInput = {
    where: OrderWhereUniqueInput
    data: XOR<OrderUpdateWithoutUserInput, OrderUncheckedUpdateWithoutUserInput>
  }

  export type OrderUpdateManyWithWhereWithoutUserInput = {
    where: OrderScalarWhereInput
    data: XOR<OrderUpdateManyMutationInput, OrderUncheckedUpdateManyWithoutUserInput>
  }

  export type OrderScalarWhereInput = {
    AND?: OrderScalarWhereInput | OrderScalarWhereInput[]
    OR?: OrderScalarWhereInput[]
    NOT?: OrderScalarWhereInput | OrderScalarWhereInput[]
    id?: IntFilter<"Order"> | number
    status?: StringFilter<"Order"> | string
    total?: FloatFilter<"Order"> | number
    shippingAddress?: StringFilter<"Order"> | string
    paymentMethod?: StringFilter<"Order"> | string
    createdAt?: DateTimeFilter<"Order"> | Date | string
    updatedAt?: DateTimeFilter<"Order"> | Date | string
    userId?: IntFilter<"Order"> | number
  }

  export type ProductCreateWithoutBusinessInput = {
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    categories?: CategoryCreateNestedManyWithoutProductsInput
    UserProduct?: UserProductCreateNestedManyWithoutProductInput
    OrderProduct?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutBusinessInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    categories?: CategoryUncheckedCreateNestedManyWithoutProductsInput
    UserProduct?: UserProductUncheckedCreateNestedManyWithoutProductInput
    OrderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput>
  }

  export type ProductCreateManyBusinessInputEnvelope = {
    data: ProductCreateManyBusinessInput | ProductCreateManyBusinessInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutBusinessInput, ProductUncheckedUpdateWithoutBusinessInput>
    create: XOR<ProductCreateWithoutBusinessInput, ProductUncheckedCreateWithoutBusinessInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutBusinessInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutBusinessInput, ProductUncheckedUpdateWithoutBusinessInput>
  }

  export type ProductUpdateManyWithWhereWithoutBusinessInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutBusinessInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    name?: StringFilter<"Product"> | string
    description?: StringFilter<"Product"> | string
    image?: StringFilter<"Product"> | string
    enabled?: BoolNullableFilter<"Product"> | boolean | null
    price?: FloatNullableFilter<"Product"> | number | null
    discounted?: BoolNullableFilter<"Product"> | boolean | null
    discount?: FloatNullableFilter<"Product"> | number | null
    deleted?: BoolNullableFilter<"Product"> | boolean | null
    createdAt?: DateTimeFilter<"Product"> | Date | string
    businessId?: IntFilter<"Product"> | number
  }

  export type BusinessCreateWithoutProductInput = {
    name: string
    email: string
    description?: string | null
    businessType: string
    phoneNumber: string
    address: string
    city: string
    province: string
    postalCode: string
    password: string
    createdAt?: Date | string
  }

  export type BusinessUncheckedCreateWithoutProductInput = {
    id?: number
    name: string
    email: string
    description?: string | null
    businessType: string
    phoneNumber: string
    address: string
    city: string
    province: string
    postalCode: string
    password: string
    createdAt?: Date | string
  }

  export type BusinessCreateOrConnectWithoutProductInput = {
    where: BusinessWhereUniqueInput
    create: XOR<BusinessCreateWithoutProductInput, BusinessUncheckedCreateWithoutProductInput>
  }

  export type CategoryCreateWithoutProductsInput = {
    name: string
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutProductsInput = {
    id?: number
    name: string
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type UserProductCreateWithoutProductInput = {
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserProductInput
  }

  export type UserProductUncheckedCreateWithoutProductInput = {
    id?: number
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    userId: number
  }

  export type UserProductCreateOrConnectWithoutProductInput = {
    where: UserProductWhereUniqueInput
    create: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput>
  }

  export type UserProductCreateManyProductInputEnvelope = {
    data: UserProductCreateManyProductInput | UserProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type OrderProductCreateWithoutProductInput = {
    quantity: number
    unitPrice: number
    subtotal: number
    order: OrderCreateNestedOneWithoutOrderProductInput
  }

  export type OrderProductUncheckedCreateWithoutProductInput = {
    id?: number
    quantity: number
    unitPrice: number
    subtotal: number
    orderId: number
  }

  export type OrderProductCreateOrConnectWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductCreateManyProductInputEnvelope = {
    data: OrderProductCreateManyProductInput | OrderProductCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type BusinessUpsertWithoutProductInput = {
    update: XOR<BusinessUpdateWithoutProductInput, BusinessUncheckedUpdateWithoutProductInput>
    create: XOR<BusinessCreateWithoutProductInput, BusinessUncheckedCreateWithoutProductInput>
    where?: BusinessWhereInput
  }

  export type BusinessUpdateToOneWithWhereWithoutProductInput = {
    where?: BusinessWhereInput
    data: XOR<BusinessUpdateWithoutProductInput, BusinessUncheckedUpdateWithoutProductInput>
  }

  export type BusinessUpdateWithoutProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type BusinessUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    businessType?: StringFieldUpdateOperationsInput | string
    phoneNumber?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    province?: StringFieldUpdateOperationsInput | string
    postalCode?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithWhereUniqueWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    update: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
    create: XOR<CategoryCreateWithoutProductsInput, CategoryUncheckedCreateWithoutProductsInput>
  }

  export type CategoryUpdateWithWhereUniqueWithoutProductsInput = {
    where: CategoryWhereUniqueInput
    data: XOR<CategoryUpdateWithoutProductsInput, CategoryUncheckedUpdateWithoutProductsInput>
  }

  export type CategoryUpdateManyWithWhereWithoutProductsInput = {
    where: CategoryScalarWhereInput
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyWithoutProductsInput>
  }

  export type CategoryScalarWhereInput = {
    AND?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    OR?: CategoryScalarWhereInput[]
    NOT?: CategoryScalarWhereInput | CategoryScalarWhereInput[]
    id?: IntFilter<"Category"> | number
    name?: StringFilter<"Category"> | string
    createdAt?: DateTimeFilter<"Category"> | Date | string
  }

  export type UserProductUpsertWithWhereUniqueWithoutProductInput = {
    where: UserProductWhereUniqueInput
    update: XOR<UserProductUpdateWithoutProductInput, UserProductUncheckedUpdateWithoutProductInput>
    create: XOR<UserProductCreateWithoutProductInput, UserProductUncheckedCreateWithoutProductInput>
  }

  export type UserProductUpdateWithWhereUniqueWithoutProductInput = {
    where: UserProductWhereUniqueInput
    data: XOR<UserProductUpdateWithoutProductInput, UserProductUncheckedUpdateWithoutProductInput>
  }

  export type UserProductUpdateManyWithWhereWithoutProductInput = {
    where: UserProductScalarWhereInput
    data: XOR<UserProductUpdateManyMutationInput, UserProductUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderProductUpsertWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
    create: XOR<OrderProductCreateWithoutProductInput, OrderProductUncheckedCreateWithoutProductInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutProductInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutProductInput, OrderProductUncheckedUpdateWithoutProductInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutProductInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutProductInput>
  }

  export type OrderProductScalarWhereInput = {
    AND?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    OR?: OrderProductScalarWhereInput[]
    NOT?: OrderProductScalarWhereInput | OrderProductScalarWhereInput[]
    id?: IntFilter<"OrderProduct"> | number
    quantity?: IntFilter<"OrderProduct"> | number
    unitPrice?: FloatFilter<"OrderProduct"> | number
    subtotal?: FloatFilter<"OrderProduct"> | number
    orderId?: IntFilter<"OrderProduct"> | number
    productId?: IntFilter<"OrderProduct"> | number
  }

  export type ProductCreateWithoutCategoriesInput = {
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductInput
    UserProduct?: UserProductCreateNestedManyWithoutProductInput
    OrderProduct?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCategoriesInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    businessId: number
    UserProduct?: UserProductUncheckedCreateNestedManyWithoutProductInput
    OrderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductUpsertWithWhereUniqueWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
    create: XOR<ProductCreateWithoutCategoriesInput, ProductUncheckedCreateWithoutCategoriesInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutCategoriesInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutCategoriesInput, ProductUncheckedUpdateWithoutCategoriesInput>
  }

  export type ProductUpdateManyWithWhereWithoutCategoriesInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutCategoriesInput>
  }

  export type UserCreateWithoutUserProductInput = {
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
    Order?: OrderCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserProductInput = {
    id?: number
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
    Order?: OrderUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserProductInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserProductInput, UserUncheckedCreateWithoutUserProductInput>
  }

  export type ProductCreateWithoutUserProductInput = {
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductInput
    categories?: CategoryCreateNestedManyWithoutProductsInput
    OrderProduct?: OrderProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutUserProductInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    businessId: number
    categories?: CategoryUncheckedCreateNestedManyWithoutProductsInput
    OrderProduct?: OrderProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutUserProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutUserProductInput, ProductUncheckedCreateWithoutUserProductInput>
  }

  export type UserUpsertWithoutUserProductInput = {
    update: XOR<UserUpdateWithoutUserProductInput, UserUncheckedUpdateWithoutUserProductInput>
    create: XOR<UserCreateWithoutUserProductInput, UserUncheckedCreateWithoutUserProductInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserProductInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserProductInput, UserUncheckedUpdateWithoutUserProductInput>
  }

  export type UserUpdateWithoutUserProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    Order?: OrderUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProductUpsertWithoutUserProductInput = {
    update: XOR<ProductUpdateWithoutUserProductInput, ProductUncheckedUpdateWithoutUserProductInput>
    create: XOR<ProductCreateWithoutUserProductInput, ProductUncheckedCreateWithoutUserProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutUserProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutUserProductInput, ProductUncheckedUpdateWithoutUserProductInput>
  }

  export type ProductUpdateWithoutUserProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductNestedInput
    categories?: CategoryUpdateManyWithoutProductsNestedInput
    OrderProduct?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutUserProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutProductsNestedInput
    OrderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutOrderInput = {
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
    UserProduct?: UserProductCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutOrderInput = {
    id?: number
    name: string
    email: string
    sex: string
    birthDate: Date | string
    province: string
    password: string
    createdAt?: Date | string
    UserProduct?: UserProductUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutOrderInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductCreateWithoutOrderInput = {
    quantity: number
    unitPrice: number
    subtotal: number
    product: ProductCreateNestedOneWithoutOrderProductInput
  }

  export type OrderProductUncheckedCreateWithoutOrderInput = {
    id?: number
    quantity: number
    unitPrice: number
    subtotal: number
    productId: number
  }

  export type OrderProductCreateOrConnectWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    create: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductCreateManyOrderInputEnvelope = {
    data: OrderProductCreateManyOrderInput | OrderProductCreateManyOrderInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutOrderInput = {
    update: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
    create: XOR<UserCreateWithoutOrderInput, UserUncheckedCreateWithoutOrderInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutOrderInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutOrderInput, UserUncheckedUpdateWithoutOrderInput>
  }

  export type UserUpdateWithoutOrderInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserProduct?: UserProductUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    sex?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    province?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    UserProduct?: UserProductUncheckedUpdateManyWithoutUserNestedInput
  }

  export type OrderProductUpsertWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    update: XOR<OrderProductUpdateWithoutOrderInput, OrderProductUncheckedUpdateWithoutOrderInput>
    create: XOR<OrderProductCreateWithoutOrderInput, OrderProductUncheckedCreateWithoutOrderInput>
  }

  export type OrderProductUpdateWithWhereUniqueWithoutOrderInput = {
    where: OrderProductWhereUniqueInput
    data: XOR<OrderProductUpdateWithoutOrderInput, OrderProductUncheckedUpdateWithoutOrderInput>
  }

  export type OrderProductUpdateManyWithWhereWithoutOrderInput = {
    where: OrderProductScalarWhereInput
    data: XOR<OrderProductUpdateManyMutationInput, OrderProductUncheckedUpdateManyWithoutOrderInput>
  }

  export type OrderCreateWithoutOrderProductInput = {
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutOrderInput
  }

  export type OrderUncheckedCreateWithoutOrderProductInput = {
    id?: number
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: number
  }

  export type OrderCreateOrConnectWithoutOrderProductInput = {
    where: OrderWhereUniqueInput
    create: XOR<OrderCreateWithoutOrderProductInput, OrderUncheckedCreateWithoutOrderProductInput>
  }

  export type ProductCreateWithoutOrderProductInput = {
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    business: BusinessCreateNestedOneWithoutProductInput
    categories?: CategoryCreateNestedManyWithoutProductsInput
    UserProduct?: UserProductCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutOrderProductInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
    businessId: number
    categories?: CategoryUncheckedCreateNestedManyWithoutProductsInput
    UserProduct?: UserProductUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutOrderProductInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
  }

  export type OrderUpsertWithoutOrderProductInput = {
    update: XOR<OrderUpdateWithoutOrderProductInput, OrderUncheckedUpdateWithoutOrderProductInput>
    create: XOR<OrderCreateWithoutOrderProductInput, OrderUncheckedCreateWithoutOrderProductInput>
    where?: OrderWhereInput
  }

  export type OrderUpdateToOneWithWhereWithoutOrderProductInput = {
    where?: OrderWhereInput
    data: XOR<OrderUpdateWithoutOrderProductInput, OrderUncheckedUpdateWithoutOrderProductInput>
  }

  export type OrderUpdateWithoutOrderProductInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutOrderProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpsertWithoutOrderProductInput = {
    update: XOR<ProductUpdateWithoutOrderProductInput, ProductUncheckedUpdateWithoutOrderProductInput>
    create: XOR<ProductCreateWithoutOrderProductInput, ProductUncheckedCreateWithoutOrderProductInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutOrderProductInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutOrderProductInput, ProductUncheckedUpdateWithoutOrderProductInput>
  }

  export type ProductUpdateWithoutOrderProductInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductNestedInput
    categories?: CategoryUpdateManyWithoutProductsNestedInput
    UserProduct?: UserProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutOrderProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: IntFieldUpdateOperationsInput | number
    categories?: CategoryUncheckedUpdateManyWithoutProductsNestedInput
    UserProduct?: UserProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserProductCreateManyUserInput = {
    id?: number
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    productId: number
  }

  export type OrderCreateManyUserInput = {
    id?: number
    status: string
    total: number
    shippingAddress: string
    paymentMethod: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserProductUpdateWithoutUserInput = {
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutUserProductNestedInput
  }

  export type UserProductUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProductUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderUpdateWithoutUserInput = {
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderProduct?: OrderProductUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    OrderProduct?: OrderProductUncheckedUpdateManyWithoutOrderNestedInput
  }

  export type OrderUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    total?: FloatFieldUpdateOperationsInput | number
    shippingAddress?: StringFieldUpdateOperationsInput | string
    paymentMethod?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateManyBusinessInput = {
    id?: number
    name: string
    description: string
    image: string
    enabled?: boolean | null
    price?: number | null
    discounted?: boolean | null
    discount?: number | null
    deleted?: boolean | null
    createdAt?: Date | string
  }

  export type ProductUpdateWithoutBusinessInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUpdateManyWithoutProductsNestedInput
    UserProduct?: UserProductUpdateManyWithoutProductNestedInput
    OrderProduct?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categories?: CategoryUncheckedUpdateManyWithoutProductsNestedInput
    UserProduct?: UserProductUncheckedUpdateManyWithoutProductNestedInput
    OrderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutBusinessInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductCreateManyProductInput = {
    id?: number
    title: string
    review: string
    rating: number
    createdAt?: Date | string
    userId: number
  }

  export type OrderProductCreateManyProductInput = {
    id?: number
    quantity: number
    unitPrice: number
    subtotal: number
    orderId: number
  }

  export type CategoryUpdateWithoutProductsInput = {
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserProductUpdateWithoutProductInput = {
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserProductNestedInput
  }

  export type UserProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type UserProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    review?: StringFieldUpdateOperationsInput | string
    rating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductUpdateWithoutProductInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    order?: OrderUpdateOneRequiredWithoutOrderProductNestedInput
  }

  export type OrderProductUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    orderId?: IntFieldUpdateOperationsInput | number
  }

  export type ProductUpdateWithoutCategoriesInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    business?: BusinessUpdateOneRequiredWithoutProductNestedInput
    UserProduct?: UserProductUpdateManyWithoutProductNestedInput
    OrderProduct?: OrderProductUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: IntFieldUpdateOperationsInput | number
    UserProduct?: UserProductUncheckedUpdateManyWithoutProductNestedInput
    OrderProduct?: OrderProductUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutCategoriesInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    enabled?: NullableBoolFieldUpdateOperationsInput | boolean | null
    price?: NullableFloatFieldUpdateOperationsInput | number | null
    discounted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    discount?: NullableFloatFieldUpdateOperationsInput | number | null
    deleted?: NullableBoolFieldUpdateOperationsInput | boolean | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    businessId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductCreateManyOrderInput = {
    id?: number
    quantity: number
    unitPrice: number
    subtotal: number
    productId: number
  }

  export type OrderProductUpdateWithoutOrderInput = {
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutOrderProductNestedInput
  }

  export type OrderProductUncheckedUpdateWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
  }

  export type OrderProductUncheckedUpdateManyWithoutOrderInput = {
    id?: IntFieldUpdateOperationsInput | number
    quantity?: IntFieldUpdateOperationsInput | number
    unitPrice?: FloatFieldUpdateOperationsInput | number
    subtotal?: FloatFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
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