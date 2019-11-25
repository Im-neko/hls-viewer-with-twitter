import {MigrationInterface, QueryRunner} from "typeorm";

export class Initialize1574485150237 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("CREATE TABLE `tweet` (`tweet_id_str` varchar(255) NOT NULL, `hashtag` varchar(255) NOT NULL, `user_name` varchar(255) NOT NULL, `display_name` varchar(255) NOT NULL, `icon_url` varchar(255) NOT NULL, `text` text NOT NULL, `image_url_1` varchar(255) NULL DEFAULT null, `image_url_2` varchar(255) NULL DEFAULT null, `image_url_3` varchar(255) NULL DEFAULT null, `image_url_4` varchar(255) NULL DEFAULT null, `tweeted_at` datetime NOT NULL, INDEX `IDX_a3d134a21f653002bb0990b446` (`hashtag`), PRIMARY KEY (`tweet_id_str`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query("DROP INDEX `IDX_a3d134a21f653002bb0990b446` ON `tweet`");
        await queryRunner.query("DROP TABLE `tweet`");
    }

}
