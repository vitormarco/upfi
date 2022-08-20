import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered size="auto">
      <ModalOverlay />
      <ModalContent w="auto" h="auto" bgColor="gray.800">
        <ModalBody p={0}>
          <Image src={imgUrl} maxWidth="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter justifyContent="start">
          <Link href={imgUrl} isExternal color="gray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
