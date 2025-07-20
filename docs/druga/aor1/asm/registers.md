

Specialized Uses

Some general-purpose registers have specialized uses:

EAX is automatically used by multiplication and division instructions. It is often called the extended accumulator register.

The CPU automatically uses ECX as a loop counter.

ESP addresses data on the stack (a system memory structure). It is rarely used for ordinary arithmetic or data transfer. It is often called the extended stack pointer register.

ESI and EDI are used by high-speed memory transfer instructions. They are sometimes called the extended source index and extended destination index registers.

EBP is used by high-level languages to reference function parameters and local variables on the stack. It should not be used for ordinary arithmetic or data transfer except at an advanced level of programming. It is often called the extended frame pointer register.
