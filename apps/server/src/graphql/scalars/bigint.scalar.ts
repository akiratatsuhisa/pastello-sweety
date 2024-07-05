import { CustomScalar, Scalar } from '@nestjs/graphql';
import { Kind, ValueNode } from 'graphql';

const regex = /^\-?\d+$/;
const errorMessage = 'Can not convert BigInt';

@Scalar('BigInt')
export class BigIntScalar implements CustomScalar<string, bigint> {
  description = 'BigInt custom scalar type';

  parseValue(value: string): bigint {
    if (typeof value !== 'string' || !regex.test(value)) {
      throw new Error(errorMessage);
    }
    return BigInt(value);
  }

  serialize(value: bigint): string {
    return value.toString();
  }

  parseLiteral(ast: ValueNode): bigint {
    if (ast.kind === Kind.STRING && regex.test(ast.value)) {
      return BigInt(ast.value);
    }

    throw new Error(errorMessage);
  }
}
